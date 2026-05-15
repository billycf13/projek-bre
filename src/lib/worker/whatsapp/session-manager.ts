import { WASocket } from '@whiskeysockets/baileys'
import { createWhatsAppClient } from './client'
import { createLogger } from '@/lib/logger'

const log = createLogger('whatsapp:session-manager')

const activeSessions = new Map<string, WASocket>()

export const startSession = async (sessionId: string, sync?: boolean) => {
    if (activeSessions.has(sessionId)) {
        log.warn({ sessionId }, `Session ${sessionId} already active`)
        return
    }

    log.info({ sessionId }, `Starting session for ${sessionId}`)
    const sock = await createWhatsAppClient(sessionId)
    activeSessions.set(sessionId, sock)
    return sock
}