import { generate, generateMetadataParams } from '@/modules/metadata'
import { getLoginDictionary } from './dictionary'
import { Title } from '@/modules/ui/components/typography'

import { PageParams } from '@/utils/types'

export async function generateMetadata({ params }: generateMetadataParams) {
	const { lang } = await params
	const { seo } = getLoginDictionary(lang)

	return generate({
		title: seo.title,
		description: seo.description,
		canonical: '/login',
		lang
	})
}

export default async function LoginPage({ params }: PageParams) {
	const { lang } = await params
	const labels = getLoginDictionary(lang)
	return (
		<main className="flex h-svh flex-col items-center justify-center gap-y-2.5">
			<Title variant="title" className="text-center">
				{labels.title}
			</Title>
			<p className="text-center text-balance md:w-1/2 2xl:w-1/3">
				{labels.subtitle}
			</p>
			<div className="pt-3.5">login</div>
		</main>
	)
}
