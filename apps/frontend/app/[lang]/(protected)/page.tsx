import { getUser } from '@/modules/auth/lib/server/session'
import { generate, generateMetadataParams } from '@/modules/metadata'

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
	return (
		<div className="px-container grow pb-12">
			home page protected {(await getUser()).name}
		</div>
	)
}
