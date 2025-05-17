import { redirect } from 'next/navigation'
import { authClient } from '.'
import { env } from '@/env'

export async function signInWithGoogle() {
	return await authClient.signIn.social({
		provider: 'google',
		callbackURL: `${env.NEXT_PUBLIC_FRONTEND_URL}/it`
	})
}

export async function signOut() {
	await authClient.signOut()
	return redirect('/login')
}
