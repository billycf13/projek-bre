import { redis } from './client'
import type { Event, EventName } from '../types'

const PUB_SUB_CHANNEL = 'crm:events'

export const publishEvent = async <T extends EventName>(
    event: T,
    data: Event<T>['data']
) => {
    const payload: Event<T> = {
        event,
        data,
        timestamp: Date.now()
    }
    await redis.publish(PUB_SUB_CHANNEL, JSON.stringify(payload))
}

export { PUB_SUB_CHANNEL }