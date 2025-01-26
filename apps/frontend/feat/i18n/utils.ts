import { LANGS } from '@/feat/i18n/config'
import { Route } from 'next'

export function path(url: string, lang: keyof typeof LANGS) {
	return `/${lang}${url}` as Route<string>
}
export function dict(label: string, lang: keyof typeof LANGS) {
	return LANGS[lang]?.[label] || label
}
