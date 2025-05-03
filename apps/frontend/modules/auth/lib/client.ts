'use client'

import { env } from '@/env'
import { createAuthClient } from '@repo/auth/client'

const authClient = createAuthClient({
	baseURL: env.NEXT_PUBLIC_BACKEND_URL
})

export async function signInWithGoogle() {
	return await authClient.signIn.social({
		provider: 'google',
		callbackURL: env.NEXT_PUBLIC_FRONTEND_URL
	})
}
