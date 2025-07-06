import { db } from '@foodwise/db/client'

import { router } from './trpc'

import { createCallerFactory } from './trpc'
import { getAuth } from '@foodwise/auth/server'
import { usersRouter } from './features/users/router'

export const appRouter = router({
	users: usersRouter
})
export type AppRouter = typeof appRouter
export type Context = Awaited<ReturnType<typeof createTRPCContext>>
export { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'

export const createCaller = createCallerFactory(appRouter)
export const createCallerWithDb = (
	headers: Headers,
	session: Awaited<ReturnType<ReturnType<typeof getAuth>['api']['getSession']>>
) =>
	createCaller({
		db,
		headers,
		session
	})

export const createTRPCContext = async ({ headers }: { headers: Headers }) => ({
	headers,
	session: await getAuth().api.getSession({ headers }),
	db
})
