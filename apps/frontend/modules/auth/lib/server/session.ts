'server-only'

import { getAuth } from '@foodwise/auth/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getUser() {
	return (await _getSession())?.user
}

export async function getSession() {
	return (await _getSession())?.session
}

async function _getSession() {
	const session = await getAuth().api.getSession({
		headers: await headers()
	})

	if (!session) return redirect('/login')
	return session
}
