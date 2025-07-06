import { ParamsWithLang } from '@/modules/i18n/types'
import { PropsWithChildren } from 'react'

export type LoginPageProps = PropsWithChildren<LoginPageParams>
export type LoginPageParams = {
	params: Promise<ParamsWithLang>
}
