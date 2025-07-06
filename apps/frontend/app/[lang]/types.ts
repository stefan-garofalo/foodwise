import { ParamsWithLang } from '@/modules/i18n/types'
import { PropsWithChildren } from 'react'

export type RootLayoutProps = PropsWithChildren<RootLayoutParams>
export type RootLayoutParams = {
	params: Promise<ParamsWithLang>
}
