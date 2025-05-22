import { getPageDictionary } from '@/modules/i18n/getters'
import { Lang } from '@/modules/i18n/types'

export const getLoginDictionary = (lang: Lang) =>
	getPageDictionary<'login'>(lang, 'login')
