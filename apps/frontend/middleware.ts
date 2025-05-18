import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import {
	createLocaleRedirectUrl,
	getLocaleFromCookie,
	getLocaleFromPathname
} from './modules/i18n/middleware'
import { isStaticFile, setAbsoluteUrl } from './utils/middleware'
import { canAccessRoute } from './modules/auth/middleware'

export function middleware(request: NextRequest) {
	if (!canAccessRoute(request)) {
		return NextResponse.rewrite(setAbsoluteUrl(request, '/login'))
	}

	const { pathname, search } = request.nextUrl
	if (isStaticFile(pathname)) return NextResponse.next()

	const pathLocale = getLocaleFromPathname(pathname)
	if (!pathLocale) {
		return NextResponse.redirect(
			createLocaleRedirectUrl(request, pathname, search, request.url)
		)
	}

	const cookieLocale = getLocaleFromCookie(request)
	if (cookieLocale === pathLocale) return NextResponse.next()

	const response = NextResponse.next()
	response.cookies.set('x-locale', pathLocale)
	return response
}

/*
 * Match all request paths except for the ones starting with:
 * - api (API routes)
 * - trpc (TRPC routes)
 * - _next (all Next.js internal files)
 * - favicon.ico (favicon file)
 */
export const config = {
	matcher: ['/((?!api|trpc|_next|favicon.ico).*)']
}
