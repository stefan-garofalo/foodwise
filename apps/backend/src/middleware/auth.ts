import { getAuth } from '@foodwise/auth/server'
import { type Context } from 'hono'
import { type BlankEnv } from 'hono/types'

export const authHandler = async (c: Context<BlankEnv, '/auth/*', {}>) =>
	await getAuth().handler(c.req.raw)
