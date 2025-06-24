import { getMetadata, type generateMetadataProps } from '@/modules/metadata'

export const generateMetadata = async (props: generateMetadataProps) =>
	await getMetadata(props, import.meta.url)

export default async function CategoriesSettingsPage() {}
