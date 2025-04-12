import { getPageDictionary } from '@/features/i18n/utils'
import { generate, generateMetadataParams } from '@/modules/metadata'
import { getDictionary } from './dictionary'

export async function generateMetadata({ params }: generateMetadataParams) {
	const { lang } = await params
	const { seo } = getDictionary(lang)

	return generate({
		title: seo.title,
		description: seo.description,
		canonical: '/login',
		lang
	})
}

export default async function LoginPage() {
	return <main className="px-container grow pb-12"></main>
}
