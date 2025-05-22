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
