import { DisconnectReason, type ConnectionState } from '@whiskeysockets/baileys'
import { Boom } from '@hapi/boom'
import { addJob } from '@/lib/queue'
import { redis } from '@/lib/queue'
import { createLogger } from '@/lib/logger'
import { useRedisAuthState } from '../auth-state'


const log = createLogger('whatsapp:connection')
const QR_TTL = 60 // detik
const MAX_RETRIES = 5
const RETRY_KEY = (sessionId: string) => `reconnect:retry:${sessionId}`

const incrementRetry = async (sessionId: string): Promise<number> => {
    const count = await redis.incr(RETRY_KEY(sessionId))

    await redis.expire(RETRY_KEY(sessionId), 60 * 60)
    return count
}

const resetRetry = async (sessionId: string): Promise<void> => {
    await redis.del(RETRY_KEY(sessionId))
}

const getBackOffDelay = (retryCount: number): number => {
    return Math.min(2000 * Math.pow(2, retryCount - 1), 32000)
}

export const handleConnectionUpdate = async (
    sessionId: string,
    update: Partial<ConnectionState>,
    reconnect: () => void
) => {
    const { connection, lastDisconnect, qr } = update

    if (qr) await redis.set(`qr:${sessionId}`, qr, 'EX', QR_TTL)

    if (connection === 'open') {
        await redis.del(`qr:${sessionId}`)
        await resetRetry(sessionId)
        await addJob('session-update', { sessionId, status: 'open' })
        log.info({ sessionId }, 'Connected!')
    }

    if (connection === 'close') {
        const statusCode = (lastDisconnect?.error as Boom)?.output?.statusCode

        const permanentDisconnectectReasons = [
            DisconnectReason.loggedOut,
            DisconnectReason.badSession,
            DisconnectReason.multideviceMismatch
        ]

        const temporaryDisconnectReasons = [
            DisconnectReason.connectionClosed,
            DisconnectReason.connectionLost,
            DisconnectReason.connectionReplaced,
            DisconnectReason.restartRequired,
            DisconnectReason.unavailableService,
            DisconnectReason.timedOut,
            DisconnectReason.forbidden
        ]

        const isPermanentDisconnect = permanentDisconnectectReasons.includes(statusCode)
        const isTemporaryDisconnect = temporaryDisconnectReasons.includes(statusCode)

        const shouldReconnect = !isPermanentDisconnect || isTemporaryDisconnect

        if (shouldReconnect) {
            const retryCount = await incrementRetry(sessionId)

            if (retryCount >= MAX_RETRIES) {
                await resetRetry(sessionId)
                await addJob('session-update', { sessionId, status: 'error' })
                log.error({ sessionId }, `Max retries (${MAX_RETRIES}) reached, stopping reconnect`)
                return
            }

            const status: any = statusCode === DisconnectReason.timedOut ? 'timeout' : 'close'
            await addJob('session-update', { sessionId, status })

            const delay = getBackOffDelay(retryCount)
            log.info({ sessionId, retryCount, delay }, `Reconnecting in ${delay}ms...`)
            setTimeout(() => reconnect(), delay)
            return
        }

        if (isPermanentDisconnect) {
            const { clearAuth } = await useRedisAuthState(sessionId)
            clearAuth
            await resetRetry(sessionId)
            await addJob('session-update', { sessionId, status: 'logout' })
            log.warn({ sessionId }, `Session ${sessionId} logged out, auth cleared `)
            return
        }
    }
}