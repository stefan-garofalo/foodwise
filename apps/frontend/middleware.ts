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

export const config = {
	matcher: [
		'/((?!_next).*)',
		'/((?!_next|[^?]*\\.(html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		'/(api|trpc)(.*)'
	]
}
