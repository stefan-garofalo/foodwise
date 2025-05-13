import { auth } from '@foodwise/auth/server'
import { type Context } from 'hono'
import { type BlankEnv } from 'hono/types'

export const authHandler = async (c: Context<BlankEnv, '/auth/*', {}>) =>
	await auth.handler(c.req.raw)

// export const authMiddleware = async (
// 	c: Context<BlankEnv, '/auth/*', {}>,
// 	next: Next
// ) => {
// 	const session = await auth.api.getSession({ headers: c.req.raw.headers })

// 	if (!session) {
// 		c.set('user', null)
// 		c.set('session', null)
// 		return next()
// 	}

// 	c.set('user', session.user)
// 	c.set('session', session.session)
// 	return next()
// }
