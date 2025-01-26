import { redirect } from 'next/navigation'
import { type NextRequest } from 'next/server'
import { setSessionCookie } from '@/lib/auth'

export async function GET({ nextUrl: { searchParams } }: NextRequest) {
	if (searchParams.get('state')) return redirect('/')
	const res = await fetch(`${''}&code=${searchParams.get('code')}`, {
		method: 'POST'
	})
	const authData = await res.formData()
	await setSessionCookie({
		cookieName: '',
		value: authData.get('access_token')
	})
	return redirect('/')
}
