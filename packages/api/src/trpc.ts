import { initTRPC } from '@trpc/server'
import type { Context } from '.'
import { authedMiddleware } from './middleware/auth'

export const t = initTRPC.context<Context>().create()

export const router = t.router
export const publicProcedure = t.procedure
export const authedProcedure = t.procedure.use(authedMiddleware)
export const createCallerFactory = t.createCallerFactory
