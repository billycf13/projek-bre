import { createMiddleware } from 'hono/factory'
import { redis } from '@/lib/queue'
import { HTTPException } from 'hono/http-exception'
import { createLogger } from '@/lib/logger'

const log = createLogger('rate-limit')

interface RateLimitOptions {
    windowMs: number
    max: number
    keyPrefix?: string
}

export const rateLimit = (options: RateLimitOptions) => {
    return createMiddleware(async (c, next) => {
        // 1. Identify client (IP or User ID if authenticated)
        const xff = c.req.header('x-forwarded-for')
        const firstIp = xff?.split(',')[0]
        const ip = firstIp ? firstIp.trim() : 'unknown'
        const user = c.get('jwtPayload' as any)?.sub

        // Priority: Logged in User ID, then IP
        const identifier = user ? `user:${user}` : `ip:${ip}`
        const key = `bre:ratelimit:${options.keyPrefix || 'global'}:${identifier}`

        try {
            // 2. Increment hits
            const hits = await redis.incr(key)

            // 3. Set expiration if it's a new key
            if (hits === 1) {
                await redis.expire(key, Math.floor(options.windowMs / 1000))
            }

            // 4. Set headers for transparency
            const ttl = await redis.ttl(key)
            c.header('X-RateLimit-Limit', options.max.toString())
            c.header('X-RateLimit-Remaining', Math.max(0, options.max - hits).toString())
            c.header('X-RateLimit-Reset', (Math.floor(Date.now() / 1000) + ttl).toString())

            // 5. Check limit
            if (hits > options.max) {
                log.warn({ identifier, key, hits }, 'Rate limit exceeded')
                throw new HTTPException(429, {
                    message: 'Too many requests, please try again later.',
                })
            }

            await next()
        } catch (err) {
            if (err instanceof HTTPException) throw err

            // Fail open if Redis is down (to prevent locking out users), but log it
            log.error({ err }, 'Rate limit error (Redis down?)')
            await next()
        }
    })
}