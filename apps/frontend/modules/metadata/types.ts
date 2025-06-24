import { type Lang, type LangPageParams } from '../i18n/types'

export type generateMetadataProps = { params: LangPageParams }

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
