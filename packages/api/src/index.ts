import { getAuth } from '@foodwise/auth/server'
import { db } from '@foodwise/db/client'
import { usersRouter } from './features/users/router'
import { createCallerFactory, router } from './trpc'

export const appRouter = router({
  users: usersRouter,
})
export type AppRouter = typeof appRouter
export type Context = Awaited<ReturnType<typeof createTRPCContext>>
export type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

export const createCaller = createCallerFactory(appRouter)
export const createCallerWithDb = (
  headers: Headers,
  session: Awaited<ReturnType<ReturnType<typeof getAuth>['api']['getSession']>>
): ReturnType<typeof createCaller> =>
  createCaller({
    db,
    headers,
    session,
  })

export const createTRPCContext = async ({ headers }: { headers: Headers }) => ({
  headers,
  session: await getAuth().api.getSession({ headers }),
  db,
})
