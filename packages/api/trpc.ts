import { initTRPC, TRPCError } from '@trpc/server'
import { Context } from '.'

const t = initTRPC.context<Context>().create()

const isAuthed = t.middleware(({ next, ctx }) => {
	if (!ctx.session?.user) {
		throw new TRPCError({ code: 'UNAUTHORIZED' })
	}

	return next({
		ctx: {
			session: ctx.session,
			user: ctx.session.user,
			db: ctx.db
		}
	})
})

export const router = t.router
export const publicProcedure = t.procedure
export const authedProcedure = t.procedure.use(isAuthed)
export const createCallerFactory = t.createCallerFactory
