import { env } from '@/env'
import { LOCALES } from '@/modules/i18n/config'
import { Lang, LangPageParams } from '@/modules/i18n/types'
import type { Metadata } from 'next'

export type generateMetadataParams = { params: LangPageParams }

type generateParams = {
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

export function generate({
	title,
	description,
	image,
	canonical,
	lang = 'it'
}: generateParams): Metadata {
	return {
		title,
		description,
		metadataBase: new URL(env.NEXT_PUBLIC_FRONTEND_URL),
		alternates: { canonical },
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
