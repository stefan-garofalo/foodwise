import { NextRequest } from 'next/server'

export function getLocaleFromCookie(
	cookies: NextRequest['cookies']
): string | undefined {
	return cookies.get('x-locale')?.value
}
