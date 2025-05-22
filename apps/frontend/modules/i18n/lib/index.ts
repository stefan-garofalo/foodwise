import { LANGS, LOCALE_LIST } from '@/modules/i18n/config'
import { getParams } from '@nimpl/getters/get-params'
import { Route } from 'next'
import { Lang } from '../types'

export function path(url: string, lang: keyof typeof LANGS) {
	return `/${lang}${url}` as Route<string>
}
export function getLocaleFromPathname(pathname: string): string | undefined {
	for (const locale of LOCALE_LIST) {
		if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
			return locale
		}
	}
	return undefined
}
export function localizePath(url: string) {
	const { lang } = getParams()
	return path(url, lang as Lang)
}
