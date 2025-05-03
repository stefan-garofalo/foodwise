'use client'

import { createAuthClient } from '@repo/auth/client'

const authClient = createAuthClient({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URL!
})

export async function signInWithGoogle() {
	return await authClient.signIn.social({
		provider: 'google',
		callbackURL: process.env.NEXT_PUBLIC_FRONTEND_URL!
	})
}
