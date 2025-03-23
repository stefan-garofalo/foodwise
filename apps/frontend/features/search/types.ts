import { Prettify } from '@/utils/types'

export type SearchParams = Prettify<{
	[key: string]: string | number | undefined | string[]
}>
