import { LogoutButton } from '@/modules/auth/components/logout'
import { getUser } from '@/modules/auth/lib/server/session'
import { generate, generateMetadataParams } from '@/modules/metadata'
import { auth } from '@repo/auth/server'
import { headers } from 'next/headers'

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
		<main className="px-container grow pb-12">
			home page protected {(await getUser()).name}
			<LogoutButton />
		</main>
	)
}
