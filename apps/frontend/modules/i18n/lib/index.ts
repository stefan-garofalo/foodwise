import { LANGS } from '@/modules/i18n/config'
import { getAppParams } from '@nimpl/getters/get-app-params'
import { Route } from 'next'
import { Lang } from '../types'

export function path(url: string, lang: keyof typeof LANGS) {
	return `/${lang}${url}` as Route<string>
}

export function localizePath(url: string) {
	const { lang } = getAppParams()
	return path(url, lang as Lang)
}
