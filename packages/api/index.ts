import { db } from '@repo/db/client'

import { router } from './trpc'
import { categoriesRouter } from './categories/router'
import { createCallerFactory } from './trpc'
import { auth } from '@repo/auth'

export const appRouter = router({
	categories: categoriesRouter
})
export type AppRouter = typeof appRouter
export type Context = Awaited<ReturnType<typeof createTRPCContext>>
export { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'

export const createCaller = createCallerFactory(appRouter)

export const createTRPCContext = async ({ headers }: { headers: Headers }) => ({
	headers,
	session: await auth.api.getSession({ headers }),
	db
})
