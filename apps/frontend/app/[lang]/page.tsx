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
	return <main className="grow px-container pb-12"></main>
}
