import {
  getAuth,
  nextCookies,
  toNextJsHandler,
} from '@/modules/auth/lib/server'

export const { GET, POST } = toNextJsHandler(
  getAuth({ plugins: [nextCookies() as any] }).handler
)
