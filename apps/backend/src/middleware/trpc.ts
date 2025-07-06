import { trpcServer } from '@hono/trpc-server'
import { appRouter, createTRPCContext } from '@foodwise/api'

export const trpcMiddleware = trpcServer({
	endpoint: '/api/trpc',
	router: appRouter,
	createContext: ({ req }) => createTRPCContext({ headers: req.headers })
})
