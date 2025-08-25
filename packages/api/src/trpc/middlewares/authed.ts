import { TRPCError } from '@trpc/server'
import { t } from '../core'

export const authedMiddleware = t.middleware(({ next, ctx }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return next({
    ctx: {
      ...ctx,
      user: ctx.session.user,
    },
  })
})

export const authedProcedure = t.procedure.use(authedMiddleware)
