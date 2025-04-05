import { trpcServer } from '@hono/trpc-server'
import { appRouter, createTRPCContext } from '@repo/api'

export const trpcMiddleware = trpcServer({
	router: appRouter,
	createContext: createTRPCContext
})
