import { appRouter, createTRPCContext } from '@foodwise/api'
import { trpcServer } from '@hono/trpc-server'

export const trpcMiddleware = trpcServer({
  endpoint: '/api/trpc',
  router: appRouter,
  createContext: ({ req }) => createTRPCContext({ headers: req.headers }),
})
