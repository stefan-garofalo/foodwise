import { generate, generateMetadataParams } from '@/modules/metadata'
import { getLoginDictionary } from './dictionary'
import { Title } from '@/modules/ui/primitives/typography'

import { PageParams } from '@/utils/types'
import { Button } from '@/modules/ui/primitives/button'
import { GoogleIcon } from '@/modules/ui/icons'

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
		<main className="flex h-svh flex-col items-center justify-center gap-y-4">
			<Title variant="title" className="text-center lg:text-7xl!">
				{labels.title}
			</Title>
			<p className="text-center text-pretty whitespace-pre-line md:w-1/2 lg:text-lg 2xl:w-1/3">
				{labels.subtitle}
			</p>
			<Button className="mt-5 max-w-sm" variant="default" size="full">
				<GoogleIcon color="currentColor" /> {labels.actions.google}
			</Button>
		</main>
	)
}
