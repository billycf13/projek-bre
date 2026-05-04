import type { ConnectionOptions } from 'bullmq'
import { Redis } from 'ioredis'
import { env } from '@/lib/env'

export const redisConnection: ConnectionOptions = {
    url: env.REDIS_URL
}

export const redis = new Redis(env.REDIS_URL)
export { Redis }