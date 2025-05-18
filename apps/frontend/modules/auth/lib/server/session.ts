'server-only'
import { cache } from 'react'

import { getAuth } from '@foodwise/auth/server'
import { headers } from 'next/headers'

import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers'
import { redirect } from 'next/navigation'

export async function getUser() {
	return (await _getSession())?.user
}

export async function getSession() {
	return (await _getSession())?.session
}

async function _getSession() {
	const session = await cachedSession(headers())
	if (!session) redirect('/login')
	return session
}

const cachedSession = cache(
	async (heads: Promise<ReadonlyHeaders>) =>
		await getAuth().api.getSession({
			headers: await heads
		})
)
