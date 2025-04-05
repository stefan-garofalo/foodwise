import { db } from '@repo/db/client'

import { router } from './trpc'
import { categoriesRouter } from './categories/router'
import { createCallerFactory } from './trpc'
import { AuthContext } from '@/export'

export const appRouter = router({
	categories: categoriesRouter
})
export type AppRouter = typeof appRouter
export { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'

export const createCaller = createCallerFactory(appRouter)

export type Context = {
	db: typeof db
} & Partial<RuntimeContext>

type RuntimeContext = {
	headers: Headers
	auth: any
}

export const createTRPCContext = async ({
	headers,
	auth
}: RuntimeContext): Promise<Context> => ({
	headers,
	auth,
	db
})
