import { getSessionCookie } from '@foodwise/auth/server'
import { NextRequest } from 'next/server'
import { PUBLIC_ROUTES } from '../config'

export function canAccessRoute(request: NextRequest): boolean {
	return PUBLIC_ROUTES.includes(request.nextUrl.pathname)
		? true
		: !!getSessionCookie(request)
}
