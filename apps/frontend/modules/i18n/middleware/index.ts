import { NextRequest } from 'next/server'
import { FALLBACK_LOCALE } from '../config'
import { getLocaleFromCookie } from '../lib/cookies'

// Helper function to create locale redirect URL
export function createLocaleRedirectUrl(
	request: NextRequest,
	pathname: string,
	search: string,
	baseUrl: string
) {
	return new URL(
		`/${getLocaleFromCookie(request.cookies) ?? FALLBACK_LOCALE}${pathname}${search}`,
		baseUrl
	)
}

export function stripLangFromPathname(
	pathname: string
): [path: string, lang: string] {
	const [lang, ...segments] = pathname.split('/').filter(Boolean)
	if (segments.length === 0) return ['/', lang] as const
	return [`/${segments.join('/')}`, lang] as const
}
