import { LOCALES } from '@/feat/i18n/config'
import { Lang, LangPageParams } from '@/feat/i18n/types'

type Metadata = {
	title: string
	description: string
	image?: {
		src?: string
		width?: number
		height?: number
	}
	canonical: string
	lang: Lang
}

export type generateMetadataParams = { params: LangPageParams }

export function generate({
	title,
	description,
	image,
	canonical,
	lang = 'it'
}: Metadata) {
	return {
		title,
		description,
		metadataBase: process.env.PROD_URL ? new URL(`${process.env.PROD_URL}`) : '',
		alternates: {
			canonical
		},
		openGraph: {
			title,
			description,
			...(lang ? { locale: LOCALES[lang] } : {}),
			type: 'website',
			...(image && image?.src
				? {
						images: [
							{
								url: image.src,
								width: image.width,
								height: image.height
							}
						]
					}
				: {})
		}
	}
}
