import { getSessionCookie } from '@foodwise/auth/server'
import { NextRequest } from 'next/server'
import { PUBLIC_ROUTES } from '../config'
import { stripLangFromPathname } from '@/modules/i18n/middleware'
import { buildAbsoluteUrl } from '@/utils/middleware'
import { FALLBACK_LOCALE } from '@/modules/i18n/config'

export function canAccessRoute(request: NextRequest) {
	const session = getSessionCookie(request)
	const [lang, path] = stripLangFromPathname(request.nextUrl.pathname)
	console.log({ lang, path })
	if (session && PUBLIC_ROUTES.includes(path)) {
		return buildAbsoluteUrl(`/${lang ?? FALLBACK_LOCALE}`, request)
	}
	if (!session && !PUBLIC_ROUTES.includes(path)) {
		return buildAbsoluteUrl(`/${lang ?? FALLBACK_LOCALE}/login`, request)
	}

	return null
}
