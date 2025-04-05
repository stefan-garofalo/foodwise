import { Hono } from 'hono'

import { trpcMiddleware } from './middleware/trpc'
import { corsMiddleware } from './middleware/cors'
import { authMiddleware } from './middleware/auth'

const app = new Hono()

app.use('*', corsMiddleware)
app.use('api/trpc/*', trpcMiddleware)
app.use('api/auth/*', authMiddleware)

export default {
	port: 3080,
	fetch: app.fetch
}
