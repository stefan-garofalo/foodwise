import { Prettify } from '@/utils/types'
import { LANGS } from './config'

export type Lang = Prettify<keyof typeof LANGS>
export type LangParams = Prettify<{ lang: Lang }>
export type LangPageParams = Promise<Prettify<LangParams>>
