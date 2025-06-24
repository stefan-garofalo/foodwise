import { getMetadata } from '@/modules/metadata'
import { generateMetadataProps } from '@/modules/metadata/types'
import { Title } from '@/modules/ui/primitives/typography'
import { getCategoriesDictionary } from './dictionary'
import { WithLangParam } from '@/modules/i18n/types'
import { Button } from '@/modules/ui/primitives/button'

export const generateMetadata = async (props: generateMetadataProps) =>
	await getMetadata(props, import.meta.url)

export default async function CategoriesSettingsPage({
	params
}: WithLangParam<{}>) {
	const { lang } = await params
	const dict = getCategoriesDictionary(lang)
	return (
		<div className="px-container flex-col gap-y-4 py-4">
			<section className="flex items-center justify-between">
				<div>
					<Title variant="title">{dict.title}</Title>
					<p>{dict.description}</p>
				</div>
				<Button>{dict.actions.create}</Button>
			</section>
		</div>
	)
}
