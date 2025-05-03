import { LangPageParams } from '@/modules/i18n/types'
import { ClassValue } from 'clsx'

export type Prettify<T> = T extends object
	? T extends Function | Array<any> | Date
		? T
		: {
				[K in keyof T]: Prettify<T[K]>
			} & {}
	: T

export type PageParams = {
	params: LangPageParams
}
