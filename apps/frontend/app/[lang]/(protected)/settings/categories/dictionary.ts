import { getPageDictionary } from '@/modules/i18n/getters'
import type { Lang } from '@/modules/i18n/types'

export const getCategoriesDictionary = (lang: Lang) =>
  getPageDictionary<'settings/categories'>(lang, 'settings/categories')
