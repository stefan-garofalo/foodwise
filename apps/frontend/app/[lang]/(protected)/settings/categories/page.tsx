import type { BaseGenerateMetadataProps } from '@/app/[lang]/types'
import CategoryCreateDialog from '@/features/users/settings/categories/create'
import { getMetadata } from '@/modules/metadata'
import type { GenerateMetadataProps } from '@/modules/metadata/types'
import { Title } from '@/modules/ui/primitives/typography'
import { getCategoriesDictionary } from './dictionary'
import type { CategoriesSettingsPageProps } from './types'

export const generateMetadata = async (props: BaseGenerateMetadataProps) =>
  await getMetadata(props as unknown as GenerateMetadataProps, import.meta.url)

export default async function CategoriesSettingsPage({
  params,
}: CategoriesSettingsPageProps) {
  const { lang } = await params
  const dict = getCategoriesDictionary(lang)
  return (
    <div className="flex-col gap-y-4 px-container py-4">
      <section className="flex items-center justify-between">
        <div>
          <Title variant="title">{dict.title}</Title>
          <p>{dict.description}</p>
        </div>
        <CategoryCreateDialog />
      </section>
    </div>
  )
}
