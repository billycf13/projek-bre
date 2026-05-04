import { z } from 'zod'

const schema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']),
    DATABASE_URL: z.string(),
    REDIS_URL: z.string(),
    JWT_SECRET: z.string(),
    JWT_EXPIRES_IN: z.string(),
    PORT: z.coerce.number().default(3000),
    HOST: z.string().default('localhost'),
    MINIO_ENDPOINT: z.string(),
    MINIO_ACCESS_KEY: z.string(),
    MINIO_SECRET_KEY: z.string(),
    MINIO_BUCKET_MEDIA: z.string(),
})

export const env = schema.parse(process.env)
export type Env = z.infer<typeof schema>