import { getParams } from '@nimpl/getters/get-params'
import { getCategoriesDictionary } from '@/app/[lang]/(protected)/settings/categories/dictionary'
import type { CategoriesSettingsPageParams } from '@/app/[lang]/(protected)/settings/categories/types'
import DialogForm from '@/modules/form/components/abstractions/dialog-form'
import CategoryCreateForm from './form'

export default function CategoryCreateDialog() {
  const { lang } = getParams() as Awaited<CategoriesSettingsPageParams>
  const dict = getCategoriesDictionary(lang)
  return (
    <DialogForm
      labels={{
        description: dict.form.create.description,
        title: dict.form.create.title,
        trigger: dict.actions.create,
      }}
    >
      <CategoryCreateForm labels={dict.form.create} />
    </DialogForm>
  )
}
