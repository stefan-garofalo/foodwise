import { createCallerWithDb } from '@foodwise/api'
import { getAuth } from '@foodwise/auth/server'
import type { Context } from 'hono'
import type { BlankEnv } from 'hono/types'

export const authHandler = async (c: Context<BlankEnv, '/auth/*', {}>) =>
  await getAuth({
    databaseHooks: {
      user: {
        create: {
          async after(user, ctx) {
            const trpc = createCallerWithDb(ctx?.headers!, {
              session: ctx?.context.session as any,
              user,
            })
            await trpc.users.init(user.id)
          },
        },
      },
    },
  }).handler(c.req.raw)
