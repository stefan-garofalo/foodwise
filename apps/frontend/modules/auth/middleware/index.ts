import { getSessionCookie } from '@foodwise/auth/server'
import { NextRequest } from 'next/server'
import { PUBLIC_ROUTES } from '../config'
import { stripLangFromPathname } from '@/modules/i18n/middleware'

export function canAccessRoute(request: NextRequest) {
	const session = getSessionCookie(request)
	const [path, lang] = stripLangFromPathname(request.nextUrl.pathname)

	if (session && PUBLIC_ROUTES.includes(path)) {
		return new URL(`${lang}/`, request.url)
	}
	if (!session && !PUBLIC_ROUTES.includes(path)) {
		return new URL(`/${lang}/login`, request.url)
	}

	return null
}
