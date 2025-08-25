import { getAuth } from '@foodwise/auth/server'
import { db } from '@foodwise/db/client'

export const createTRPCContext = async ({ headers }: { headers: Headers }) => ({
  headers,
  session: await getAuth().api.getSession({ headers }),
  db,
})

export type Context = Awaited<ReturnType<typeof createTRPCContext>>
