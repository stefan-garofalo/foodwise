import { db } from '@repo/db/client'
import { router } from './trpc'
import { categoriesRouter } from './categories/router'
import { createCallerFactory } from './trpc'

export const appRouter = router({
	categories: categoriesRouter
})
export type AppRouter = typeof appRouter
export { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'

export const createCaller = createCallerFactory(appRouter)

export const createTRPCContext = async (opts?: {}) => ({
	...opts,
	db
})
export type Context = Awaited<ReturnType<typeof createTRPCContext>>
