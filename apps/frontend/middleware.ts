import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { canAccessRoute } from './modules/auth/middleware'
import { getLocaleFromCookie } from './modules/i18n/lib/cookies'
import {
  createLocaleRedirectUrl,
  stripLangFromPathname,
} from './modules/i18n/middleware'
import { isStaticFile } from './utils/middleware'

export function middleware(request: NextRequest) {
  const redirect = canAccessRoute(request)
  if (redirect) return NextResponse.redirect(redirect)

  const { pathname, search } = request.nextUrl
  if (isStaticFile(pathname)) return NextResponse.next()

  const [pathLocale] = stripLangFromPathname(pathname)
  if (!pathLocale) {
    return NextResponse.redirect(
      createLocaleRedirectUrl(request, pathname, search)
    )
  }

  const cookieLocale = getLocaleFromCookie(request.cookies)
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
  matcher: ['/((?!api|trpc|_next|favicon.ico).*)'],
  runtime: 'nodejs',
}
