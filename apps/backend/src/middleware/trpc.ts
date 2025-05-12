import { trpcServer } from '@hono/trpc-server'
import { appRouter, createTRPCContext } from '@foodwise/api'

export const trpcMiddleware = trpcServer({
	router: appRouter,
	createContext: ({ req }) => createTRPCContext({ headers: req.headers })
})
