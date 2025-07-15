'use client'

import { createAuthClient } from '@foodwise/auth/client'
import { env } from '@/env'

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_BACKEND_URL,
})
