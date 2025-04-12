import { generate, generateMetadataParams } from '@/modules/metadata'
import { getLoginDictionary } from './dictionary'

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

export default async function LoginPage() {
	return <main className="px-container grow pb-12"></main>
}
