import { redis } from '@/lib/queue'
import type { SignalDataSet, AuthenticationState, SignalDataTypeMap } from '@whiskeysockets/baileys'
import { initAuthCreds, BufferJSON } from '@whiskeysockets/baileys'

const KEY_PREFIX = (sessionId: string) => `wa:auth:${sessionId}`
const CREDS_KEY = (sessionId: string) => `${KEY_PREFIX(sessionId)}:creds`
const SIGNAL_KEY = (sessionId: string, type: string, id: string) => `${KEY_PREFIX(sessionId)}:key:${type}:${id}`

export const useRedisAuthState = async (sessionId: string): Promise<{
    state: AuthenticationState;
    saveCreds: () => Promise<void>;
    clearAuth: () => Promise<void>
}> => {

    // load atau init creds
    const credsRaw = await redis.get(CREDS_KEY(sessionId)).catch(() => null)
    const creds: AuthenticationState['creds'] = credsRaw
        ? JSON.parse(credsRaw, BufferJSON.reviver)
        : initAuthCreds()

    const saveKey = async (type: string, id: string, value: unknown) => {
        const key = SIGNAL_KEY(sessionId, type, id)
        if (value === null || value === undefined) {
            await redis.del(key)
        } else {
            await redis.set(key, JSON.stringify(value, BufferJSON.replacer))
        }
    }

    const state: AuthenticationState = {
        creds,
        keys: {
            get: async <T extends keyof SignalDataTypeMap>(type: T, ids: string[]) => {
                const result: { [id: string]: SignalDataTypeMap[T] } = {}

                await Promise.all(
                    ids.map(async (id) => {
                        const raw = await redis.get(SIGNAL_KEY(sessionId, type, id)).catch(() => null)
                        if (raw) {
                            result[id] = JSON.parse(raw, BufferJSON.reviver) as SignalDataTypeMap[T]
                        }
                    })
                )

                return result
            },

            set: async (data: SignalDataSet) => {
                await Promise.all(
                    Object.entries(data).flatMap(([type, ids]) =>
                        Object.entries(ids ?? {}).map(([ids, value]) =>
                            saveKey(type, ids, value))
                    )
                )
            },

            clear: async () => {
                const keys = await redis.keys(`${KEY_PREFIX(sessionId)}:keys:*`)
                if (keys.length > 0) await redis.del(...keys)
            }
        }
    }

    const saveCreds = async () => {
        await redis.set(
            CREDS_KEY(sessionId),
            JSON.stringify(state.creds, BufferJSON.replacer)
        )
    }

    // hapus semua data session dari Redis (saat logout)
    const clearAuth = async () => {
        const keys = await redis.keys(`${KEY_PREFIX(sessionId)}:*`)
        if (keys.length > 0) await redis.del(...keys)
    }

    return { state, saveCreds, clearAuth }
}