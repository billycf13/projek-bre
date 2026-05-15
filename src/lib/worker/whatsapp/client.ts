import makeWASocket, {
    fetchLatestBaileysVersion,
    makeCacheableSignalKeyStore,
    proto,
    getContentType,
} from '@whiskeysockets/baileys'
import { createLogger } from '@/lib/logger'
import { useRedisAuthState } from './auth-state'
import { handleConnectionUpdate } from './handlers/connection'

const log = createLogger('whatsapp:client')

const customLogger = {
    level: 'silent',
    child: () => customLogger,
    trace: () => { },
    debug: () => { },
    info: () => { },
    warn: () => { },
    error: () => { },
    fatal: () => { },
}

export const createWhatsAppClient = async (sessionId: string, syncHistory = false) => {
    const { state, saveCreds } = await useRedisAuthState(sessionId)
    const { version } = await fetchLatestBaileysVersion()

    const connect = async () => {
        const sock = makeWASocket({
            version,
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(state.keys, customLogger as any)
            },
            generateHighQualityLinkPreview: true,
            // sync history
            syncFullHistory: syncHistory,
            shouldSyncHistoryMessage: syncHistory
                ? (msg: any) => {
                    const type = getContentType(msg.message)
                    if (type === 'protocolMessage' || type === 'senderKeyDistributionMessage') return false
                    return true
                }
                : undefined,
            logger: customLogger,
        })

        sock.ev.process(async (events) => {
            if (events['connection.update']) await handleConnectionUpdate(sessionId, events['connection.update'], connect)
            if (events['creds.update']) await saveCreds()
        })

        return sock
    }

    return connect()
}