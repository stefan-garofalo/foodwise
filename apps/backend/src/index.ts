import { Hono } from 'hono'

import { trpcMiddleware } from './middleware/trpc'
import { corsMiddleware } from './middleware/cors'
import { authHandler } from './middleware/auth'

const app = new Hono()

app.use('*', corsMiddleware)
app.use('api/trpc/*', trpcMiddleware)
app.on(['POST', 'GET'], 'api/auth/*', authHandler)

app.get('/health', (c) =>
	c.json({ status: 'ok', timestamp: new Date().toISOString() })
)

export default {
	port: 3080,
	fetch: app.fetch
}
