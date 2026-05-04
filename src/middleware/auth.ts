import { jwt } from 'hono/jwt'
import { env } from '@/lib/env'
import { createMiddleware } from 'hono/factory'

export const authMiddleware = jwt({
    secret: env.JWT_SECRET,
    alg: 'HS256'
})

export const activeUserGuard = createMiddleware(async (c, next) => {
    const payload = (c as any).get('jwtPayload')

    if (!payload || !payload.sub) {
        return c.json({ error: 'Unauthorized' }, 401)
    }

    await next()
})