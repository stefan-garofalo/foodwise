import { getAuth } from '@/modules/auth/lib/server'
import { nextCookies, toNextJsHandler } from 'better-auth/next-js'

export const { GET, POST } = toNextJsHandler(
	getAuth({ plugins: [nextCookies()] }).handler
)
