import { Client } from 'minio'
import { createLogger } from '@/lib/logger'
import { env } from '@/lib/env'

const log = createLogger('storage')

let minioClient: Client | null = null

export const getMinioClient = (): Client => {
    if (minioClient) return minioClient

    const url = new URL(env.MINIO_ENDPOINT)

    minioClient = new Client({
        endPoint: url.hostname,
        port: Number(url.port) || (url.protocol === 'https:' ? 443 : 9000),
        useSSL: url.protocol === 'https:',
        accessKey: env.MINIO_ACCESS_KEY,
        secretKey: env.MINIO_SECRET_KEY,
    })

    return minioClient
}

export const initBucket = async (bucket: string) => {
    const client = getMinioClient()
    const exists = await client.bucketExists(bucket)
    if (!exists) {
        await client.makeBucket(bucket)
        log.info({ bucket }, 'Bucket created')
    } else {
        log.info({ bucket }, 'Bucket already exists')
    }
}