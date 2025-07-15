'use client'

import { useParams, usePathname } from 'next/navigation'
import { path } from '../lib'
import type { LangParams } from '../types'

/**
 * Converts a regular pathname into a localized pathname by adding the current language prefix.
 * @param value - The pathname to localize (e.g., '/dashboard')
 * @returns A localized pathname with language prefix (e.g., '/en/dashboard')
 */
export function useLocalizePath(value: string) {
  const { lang } = useParams<LangParams>()
  return path(value, lang)
}

/**
 * Returns the current pathname without the language parameter prefix.
 * For example, if the current path is '/en/dashboard', this hook returns '/dashboard'.
 */
export function useCleanedPath() {
  const { lang } = useParams<LangParams>()
  const pathname = usePathname()
  return pathname.replace(`/${lang}`, '')
}
