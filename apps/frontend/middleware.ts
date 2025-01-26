import { NextRequest, NextResponse } from "next/server"
import { LOCALE_LIST } from "./feat/i18n/config"

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  if (pathname.match(/\.[^/]+$/)) {
    return NextResponse.next()
  }
  const pathnameIsMissingLocale = LOCALE_LIST.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${LOCALE_LIST[0]}/${pathname}${search}`, request.url)
    )
  }
}

export const config = {
  matcher: ["/((?!_next).*)"],
}
