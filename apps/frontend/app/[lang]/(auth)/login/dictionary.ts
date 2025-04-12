import { Lang } from '@/modules/i18n/types'
import { getPageDictionary } from '@/modules/i18n/utils'

export const getDictionary = (lang: Lang) =>
	getPageDictionary<'login'>(lang, 'login')
