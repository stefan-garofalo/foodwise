import { auth } from '@repo/auth'
import { Context } from 'hono'
import { BlankEnv } from 'hono/types'

export const authMiddleware = async (c: Context<BlankEnv, '/auth/*', {}>) =>
	await auth.handler(c.req.raw)
