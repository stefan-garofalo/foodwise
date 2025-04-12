import { Lang } from '@/features/i18n/types'
import { getPageDictionary } from '@/features/i18n/utils'

export const getDictionary = (lang: Lang) =>
	getPageDictionary<'login'>(lang, 'login')
