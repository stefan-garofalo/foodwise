import { type LangParams, type Lang } from '../i18n/types'

export type generateMetadataProps = Promise<{ params: LangParams }>

export type generateParams = {
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
