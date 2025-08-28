import { nextCookies, toNextJsHandler } from 'better-auth/next-js'
import { getAuth } from '@/modules/auth/lib/server'

export const { GET, POST } = toNextJsHandler(
  getAuth({ plugins: [nextCookies() as any] }).handler
)
