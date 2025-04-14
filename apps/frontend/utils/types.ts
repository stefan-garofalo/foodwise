import { LangPageParams } from '@/modules/i18n/types'
import { ClassValue } from 'clsx'

export type Prettify<T> = {
	[K in keyof T]: T[K]
} & {}

export type ComponentProps = {
	children?: React.ReactNode
	className?: ClassValue
}

export type PageParams = {
  params: LangPageParams
}