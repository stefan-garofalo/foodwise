import { Hono } from 'hono'
import { trpcServer } from '@hono/trpc-server'
import { appRouter, createTRPCContext } from '@repo/api'

const app = new Hono()

app.use(
	'/trpc/*',
	trpcServer({
		router: appRouter,
		createContext: createTRPCContext
	})
)

export default {
	port: 3080,
	fetch: app.fetch
}
