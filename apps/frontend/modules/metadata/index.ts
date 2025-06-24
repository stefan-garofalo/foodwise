import type { Metadata } from 'next'
import { env } from '@/env'

import { LOCALES } from '@/modules/i18n/config'
import { getPageDictionary } from '@/modules/i18n/getters'
import { getRoute } from '../routes'
import { type generateMetadataProps, type generateParams } from './types'
import { calculatePath } from './utils'

export async function getMetadata(
	props: generateMetadataProps,
	route: string,
	{ image, canonical, ...override }: generateParams = {}
): Promise<Metadata> {
	const { lang } = await props.params

	const { path, name } = getRoute(canonical ?? calculatePath(route))
	const { seo } = getPageDictionary(
		lang,
		path().split('/').toSpliced(0, 1).join('/')
	) as {
		seo: { title: string; description: string }
	}

	return {
		title: {
			template: `%s | ${env.NEXT_PUBLIC_APP_NAME}`,
			default: name
		},
		description: seo.description,
		metadataBase: new URL(env.NEXT_PUBLIC_FRONTEND_URL),
		alternates: { canonical: path() },
		openGraph: {
			title: seo.title,
			description: seo.description,
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
		},
		...override
	}
}
