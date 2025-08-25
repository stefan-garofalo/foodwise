import { getAuth } from '@foodwise/auth/server'
import { db } from '@foodwise/db/client'
import { usersRouter } from './features/users/router'
import { createCallerFactory, router } from './trpc/core'
import { createTRPCContext } from './trpc/context'

export const appRouter = router({
  users: usersRouter,
})
export type AppRouter = typeof appRouter
export type { Context } from './trpc/context'
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

export { createTRPCContext }
