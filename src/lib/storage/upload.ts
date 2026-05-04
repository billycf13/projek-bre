import { getMinioClient } from './client'
import { createLogger } from '../logger'
import type { UploadResult } from '../types'
import { randomUUID } from 'crypto'

const log = createLogger('storage')

export const uploadFile = async (
    bucket: string,
    file: Buffer,
    mimeType: string,
    folder?: string
): Promise<UploadResult> => {
    const client = getMinioClient()
    const ext = mimeType.split('/')[1] ?? 'bin'
    const key = folder
        ? `${folder}/${randomUUID()}.${ext}`
        : `${randomUUID()}.${ext}`

    await client.putObject(
        bucket,
        key,
        file,
        file.length, {
        'Content-Type': mimeType
    }
    )

    log.info({ bucket, key, mimeType, size: file.length }, 'File uploaded')

    return { bucket, key, mimeType, size: file.length }
}

export const getFileUrl = async (
    bucket: string,
    key: string,
    expirySeconds = 60 * 60
): Promise<string> => {
    const client = getMinioClient()
    return client.presignedGetObject(bucket, key, expirySeconds)
}

export const deleteFile = async (
    bucket: string,
    key: string
) => {
    const client = getMinioClient()
    await client.removeObject(bucket, key)
    log.info({ bucket, key }, 'File deleted')
}

export const getFileBuffer = async (
    bucket: string,
    key: string
): Promise<Buffer> => {
    const client = getMinioClient()
    const stream = await client.getObject(bucket, key)

    return new Promise((resolve, reject) => {
        const chunks: Buffer[] = []
        stream.on('data', (chunk) => chunks.push(chunk))
        stream.on('end', () => resolve(Buffer.concat(chunks)))
        stream.on('error', reject)
    })
}

export const uploadFileFromPath = async (
    bucket: string,
    filePath: string,
    key: string,
    mimeType: string = 'text/plain'
) => {
    const client = getMinioClient()
    await client.fPutObject(bucket, key, filePath, { 'Content-Type': mimeType })
    log.info({ bucket, key, filePath }, 'File uploaded from path')
}

export const listObjects = async (
    bucket: string,
    prefix?: string,
    recursive: boolean = true
): Promise<any[]> => {
    const client = getMinioClient()
    const stream = client.listObjectsV2(bucket, prefix, recursive)

    return new Promise((resolve, reject) => {
        const objects: any[] = []
        stream.on('data', obj => objects.push(obj))
        stream.on('error', reject)
        stream.on('end', () => resolve(objects))
    })
}