import type { Lang, LangParams } from '../i18n/types'

export type LangMetadataProps = Promise<{ params: LangParams }>

export type GenerateParams = {
  canonical?: string
  title?: string
  description?: string
  image?: {
    src?: string
    width?: number
    height?: number
  }
  lang?: Lang
}
