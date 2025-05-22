import { getSessionCookie } from '@foodwise/auth/server'
import { NextRequest } from 'next/server'
import { PUBLIC_ROUTES } from '../config'
import { LOCALE_PATHS } from '@/modules/i18n/config'

export function canAccessRoute(request: NextRequest): boolean {
	return PUBLIC_ROUTES.includes(
		request.nextUrl.pathname.replace(
			new RegExp(`^/(${LOCALE_PATHS.join('|')})`),
			''
		)
	)
		? true
		: !!getSessionCookie(request)
}
