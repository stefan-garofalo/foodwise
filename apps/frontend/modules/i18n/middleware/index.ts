import type { NextRequest } from 'next/server'
import { buildAbsoluteUrl } from '@/utils/middleware'
import { LOCALE_LIST } from '../config'
import { getLocaleFromCookie } from '../lib/cookies'

const LEADING_SLASH_REGEX = /^\//

export function createLocaleRedirectUrl(
  request: NextRequest,
  pathname: string,
  search: string
) {
  return buildAbsoluteUrl(
    `/${getLocaleFromCookie(request.cookies)}${pathname}${search}`,
    request
  )
}

/**
 * Extracts the locale/language code from a pathname and returns the remaining path.
 *
 * This function parses a pathname that may contain a locale prefix (e.g., "/en/about" or "/fr/contact")
 * and separates it into the language code and the clean path. It uses a regex pattern built from
 * the available locales in LOCALE_LIST to match against the pathname.
 *
 * @param pathname - The pathname to parse (e.g., "/en/about", "/fr", "/invalid-path")
 * @returns A tuple containing:
 *   - lang: The extracted locale code, or undefined if no valid locale is found
 *   - path: The remaining path after removing the locale, defaulting to "/" if empty
 *
 * @example
 * stripLangFromPathname("/en/about") // returns ["en", "/about"]
 * stripLangFromPathname("/fr") // returns ["fr", "/"]
 * stripLangFromPathname("/invalid") // returns [undefined, "/invalid"]
 */
export function stripLangFromPathname(
  pathname: string
): [lang: string | undefined, path: string] {
  const localePattern = LOCALE_LIST.join('|')
  const regex = new RegExp(`^/?(?:${localePattern})(?:/(.*))?$`)

  const match = pathname.match(regex)
  if (!match) return [undefined, pathname || '/']

  // Extract locale (remove leading slash if present)
  const locale = pathname
    .replace(LEADING_SLASH_REGEX, '')
    .split('/')[0] as string
  // Extract remaining path or default to '/'
  const path = match[1] ? `/${match[1]}` : '/'
  return [locale, path]
}
