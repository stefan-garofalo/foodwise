import { redirect } from 'next/navigation'
import { setSessionCookie } from '@/modules/auth'

export async function GET() {
	await setSessionCookie({
		cookieName: '',
		value: undefined
	})
	return redirect('/')
}
