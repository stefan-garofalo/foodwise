import { Suspense } from 'react'
import type { GenerateMetadataProps } from '@/app/[lang]/types'
import UserSettingsPrefetch from '@/features/users/prefetch/settings'
import CategoryCreateForm from '@/features/users/settings/categories/create/form'
import DialogForm from '@/modules/form/components/abstractions/dialog-form'
import { getMetadata } from '@/modules/metadata'
import { Title } from '@/modules/ui/primitives/typography'
import { getCategoriesDictionary } from './dictionary'
import type { CategoriesSettingsPageProps } from './types'

export const generateMetadata = async (props: GenerateMetadataProps) =>
  await getMetadata(props, import.meta.url)

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
        <DialogForm
          labels={{
            title: dict.form.create.title,
            description: dict.form.create.description,
            trigger: dict.actions.create,
          }}
        >
          <Suspense>
            <UserSettingsPrefetch>
              <CategoryCreateForm labels={dict} />
            </UserSettingsPrefetch>
          </Suspense>
        </DialogForm>
      </section>
    </div>
  )
}
