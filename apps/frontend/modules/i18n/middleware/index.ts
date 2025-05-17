import { NextRequest } from 'next/server'
import { FALLBACK_LOCALE, LOCALE_LIST } from '../config'

// Helper function to create locale redirect URL
export function createLocaleRedirectUrl(
	request: NextRequest,
	pathname: string,
	search: string,
	baseUrl: string
) {
	return new URL(
		`/${getLocaleFromCookie(request) ?? FALLBACK_LOCALE}/${pathname}${search}`,
		baseUrl
	)
}

// Helper function to get locale from pathname
export function getLocaleFromPathname(pathname: string): string | undefined {
	for (const locale of LOCALE_LIST) {
		if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
			return locale
		}
	}
	return undefined
}

export function getLocaleFromCookie(request: NextRequest): string | undefined {
	return request.cookies.get('x-locale')?.value
}
