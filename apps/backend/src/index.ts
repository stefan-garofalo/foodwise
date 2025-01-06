import { Hono } from 'hono'
import { trpcServer } from '@hono/trpc-server'
import { appRouter, createContext } from '@repo/api'

const app = new Hono()

app.use(
	'/trpc/*',
	trpcServer({
		router: appRouter,
		createContext
	})
)

export default {
	port: 3080,
	fetch: app.fetch
}
