import type { PropsWithChildren } from 'react'
import type { ParamsWithLang } from '@/modules/i18n/types'

export type RootLayoutProps = PropsWithChildren<RootLayoutParams>
export type RootLayoutParams = {
  params: Promise<ParamsWithLang>
}
