import { getSessionCookie } from '@foodwise/auth/server'
import { NextRequest } from 'next/server'
import { PUBLIC_ROUTES } from '../config'
import { stripLangFromPathname } from '@/modules/i18n/middleware'
import { buildAbsoluteUrl } from '@/utils/middleware'
import { FALLBACK_LOCALE } from '@/modules/i18n/config'
import { getLocaleFromCookie } from '@/modules/i18n/lib/cookies'

export function canAccessRoute(request: NextRequest) {
	const session = getSessionCookie(request)
	const [lang, path] = stripLangFromPathname(request.nextUrl.pathname)

	if (session && PUBLIC_ROUTES.includes(path)) {
		return buildAbsoluteUrl(
			`/${lang ?? getLocaleFromCookie(request.cookies)}`,
			request
		)
	}
	if (!session && !PUBLIC_ROUTES.includes(path)) {
		return buildAbsoluteUrl(
			`/${lang ?? getLocaleFromCookie(request.cookies)}/login`,
			request
		)
	}

	return null
}
