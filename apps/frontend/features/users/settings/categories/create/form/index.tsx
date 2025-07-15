'use client'

import { type } from 'arktype'
import { useAppForm } from '@/modules/form/hooks'
import { useCategoryCreate } from '../../lib'

const _CategoryCreateSchema = type({
  color: 'string',
  name: 'string',
  uid: 'string',
  iconUid: 'string',
  settingsId: 'string',
})

export default function CategoryCreateForm() {
  const { mutate } = useCategoryCreate()

  const { handleSubmit, AppField } = useAppForm({
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
      <AppField children={(field) => <field.Input />} name="name" />
    </form>
  )
}
