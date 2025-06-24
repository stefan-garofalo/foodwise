import { getMetadata } from '@/modules/metadata'
import { getLoginDictionary } from './dictionary'
import { Title } from '@/modules/ui/primitives/typography'

import { PageParams } from '@/utils/types'
import { LoginButton } from '@/modules/auth/components/login'
import { type generateMetadataProps } from '@/modules/metadata/types'

export const generateMetadata = async (props: generateMetadataProps) =>
	getMetadata(props, import.meta.url)

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
			<LoginButton className="mt-5 max-w-sm" />
		</main>
	)
}
