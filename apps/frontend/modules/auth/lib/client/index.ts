'use client'

import { env } from '@/env'
import { createAuthClient } from '@repo/auth/client'

export const authClient = createAuthClient({
	baseURL: env.NEXT_PUBLIC_BACKEND_URL
})
