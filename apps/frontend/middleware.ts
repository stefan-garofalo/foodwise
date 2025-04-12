import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import {
	createLocaleRedirectUrl,
	getLocaleFromPathname
} from './modules/i18n/middleware'
import { isStaticFile } from './utils/middleware'

export function middleware(request: NextRequest) {
	const { pathname, search } = request.nextUrl
	if (isStaticFile(pathname)) return NextResponse.next()

	const pathLocale = getLocaleFromPathname(pathname)
	if (!pathLocale) {
		return NextResponse.redirect(
			createLocaleRedirectUrl(pathname, search, request.url)
		)
	}

	const cookieLocale = request.cookies.get('x-locale')?.value
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
