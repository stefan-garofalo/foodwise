import type { PropsWithChildren } from 'react'
import type { ParamsWithLang } from '@/modules/i18n/types'

export type LoginPageProps = PropsWithChildren<LoginPageParams>
export type LoginPageParams = {
  params: Promise<ParamsWithLang>
}
