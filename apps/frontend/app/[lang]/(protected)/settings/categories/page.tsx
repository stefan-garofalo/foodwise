import { getMetadata } from '@/modules/metadata'
import { generateMetadataProps } from '@/modules/metadata/types'

export const generateMetadata = async (props: generateMetadataProps) =>
	await getMetadata(props, import.meta.url)

export default async function CategoriesSettingsPage() {}
