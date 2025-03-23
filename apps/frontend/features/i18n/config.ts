import { Lang } from './types'

import en from '@/features/i18n/dict/en'
import it from '@/features/i18n/dict/it'

export const LANGS: Record<'it' | 'en', { [key: string]: string }> = {
	it,
	en
}

export const LOCALES: Record<Lang, string> = {
	it: 'it_IT',
	en: 'en_US'
}

export const LOCALE_LIST = Object.keys(LOCALES) as ['it', 'en']
