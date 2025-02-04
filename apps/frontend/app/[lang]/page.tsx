import { generate, generateMetadataParams } from '@/lib/metadata'

export async function generateMetadata({ params }: generateMetadataParams) {
	const { lang } = await params

	return generate({
		title: 'Next starter',
		description: '',
		canonical: '',
		lang
	})
}

export default async function HomePage() {
	return <main className="px-container grow pb-12"></main>
}
