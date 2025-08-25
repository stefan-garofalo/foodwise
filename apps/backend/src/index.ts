import { Hono } from 'hono'
import { authHandler } from './middleware/auth'
import { corsMiddleware } from './middleware/cors'
import { trpcMiddleware } from './middleware/trpc'

const app = new Hono()

app.use('*', corsMiddleware)
app.use('/api/trpc/*', trpcMiddleware)
app.on(['POST', 'GET'], '/api/auth/*', authHandler)

app.get('/health', (c) =>
  c.json({ status: 'ok', timestamp: new Date().toISOString() })
)

export default app
