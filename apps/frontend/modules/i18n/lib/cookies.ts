import { NextRequest } from 'next/server'
import { FALLBACK_LOCALE } from '../config'

export function getLocaleFromCookie(cookies: NextRequest['cookies']) {
	return cookies.get('x-locale')?.value ?? FALLBACK_LOCALE
}
