'use client'

import { type } from 'arktype'
import type { CategoriesDictionary } from '@/app/[lang]/(protected)/settings/categories/dictionary'
import { useAppForm } from '@/modules/form/hooks'
import { CATEGORIES_ICONS } from '../../constants'
import { useCategoryCreate } from '../../lib'

const _CategoryCreateSchema = type({
  color: 'string',
  name: 'string',
  uid: 'string',
  iconUid: 'string',
  settingsId: 'string',
})

type CategoryCreateFormProps = {
  labels: CategoriesDictionary['form']['create']
}
export default function CategoryCreateForm({
  labels,
}: CategoryCreateFormProps) {
  const { mutate } = useCategoryCreate()

  const { AppField, handleSubmit } = useAppForm({
    validators: {
      // onSubmit: CategoryCreateSchema
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(
          mutate({
            color: '',
            name: '',
            uid: '',
            iconUid: '',
            settingsId: '',
          })
        )
      }}
    >
      <AppField
        children={({ Input }) => <Input label={labels.fields.name.label} />}
        name="name"
      />
      <AppField
        children={({ Select }) => (
          <Select
            label={labels.fields.iconUid.label}
            name="iconUid"
            options={CATEGORIES_ICONS.map(({ Icon, name }) => ({
              value: name,
              label: name,
              icon: <Icon className="size-4" />,
            }))}
            placeholder={labels.fields.iconUid.placeholder}
          />
        )}
        name="iconUid"
      />
    </form>
  )
}
