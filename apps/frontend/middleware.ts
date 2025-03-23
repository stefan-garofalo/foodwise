import { NextResponse } from 'next/server'
import { LOCALE_LIST } from '@/features/i18n/config'
import type { NextRequest } from 'next/server'

// Helper function to check if a path is a static file
function isStaticFile(pathname: string) {
	return Boolean(pathname.match(/\.[^/]+$/))
}

// Helper function to check if a path needs locale redirect
function needsLocaleRedirect(pathname: string) {
	return LOCALE_LIST.every(
		(locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	)
}

// Helper function to create locale redirect URL
function createLocaleRedirectUrl(
	pathname: string,
	search: string,
	baseUrl: string
) {
	return new URL(`/${LOCALE_LIST[0]}/${pathname}${search}`, baseUrl)
}

export function middleware(request: NextRequest) {
	const { pathname, search } = request.nextUrl

	if (isStaticFile(pathname)) {
		return NextResponse.next()
	}
	if (needsLocaleRedirect(pathname)) {
		return NextResponse.redirect(
			createLocaleRedirectUrl(pathname, search, request.url)
		)
	}
}

export const config = {
	matcher: [
		'/((?!_next).*)',
		'/((?!_next|[^?]*\\.(html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		'/(api|trpc)(.*)'
	]
}
