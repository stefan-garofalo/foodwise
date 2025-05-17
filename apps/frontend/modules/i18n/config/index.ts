import { Lang } from '../types'

import en from '@/modules/i18n/dict/en'
import it from '@/modules/i18n/dict/it'

export type NestedStringRecord = {
	[key: string]: string | NestedStringRecord
}

export const LANGS = {
	it,
	en
}

export const LOCALES: Record<Lang, string> = {
	it: 'it_IT',
	en: 'en_US'
}

export const LOCALE_LIST = Object.keys(LOCALES) as ['it', 'en']
export const FALLBACK_LOCALE = 'en'
