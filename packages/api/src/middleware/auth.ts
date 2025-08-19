import { TRPCError } from '@trpc/server'
import { t } from '#api/trpc.js'

export const authedMiddleware = t.middleware(({ next, ctx }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return next({
    ctx: {
      session: ctx.session,
      user: ctx.session.user,
      db: ctx.db,
    },
  })
})
