import { redirect } from 'next/navigation'
import { env } from '@/env'
import { authClient } from '.'

export async function signInWithGoogle() {
  return await authClient.signIn.social({
    provider: 'google',
    callbackURL: env.NEXT_PUBLIC_FRONTEND_URL,
  })
}

export async function signOut() {
  await authClient.signOut()
  return redirect('/login')
}
