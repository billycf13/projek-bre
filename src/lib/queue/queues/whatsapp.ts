import { Queue } from 'bullmq'
import type { JobsOptions } from 'bullmq'
import { redisConnection } from '../client'
import type { JobPayloads, JobName } from '@/lib/types'

const defaultOptions = {
    attempt: 3,
    backoff: {
        type: 'exponential',
        delay: 1500
    },
    removeOnComplete: { count: 100 },
    removeOnFail: { count: 50 }
}

export const whatsappQueue = new Queue('whatsapp', {
    connection: redisConnection,
    defaultJobOptions: defaultOptions
})

export const webhookQueue = new Queue('webhook', {
    connection: redisConnection,
    defaultJobOptions: {
        ...defaultOptions,
        attempts: 5
    }
})

export const addJob = <T extends JobName>(
    name: T,
    data: JobPayloads[T],
    opts?: JobsOptions
) => {
    if (name === 'webhook-dispatch') {
        return webhookQueue.add(name, data, opts)
    }
    return whatsappQueue.add(name, data, opts)
}