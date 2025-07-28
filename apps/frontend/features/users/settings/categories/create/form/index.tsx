'use client'

import { type } from 'arktype'
import type { getCategoriesDictionary } from '@/app/[lang]/(protected)/settings/categories/dictionary'
import { useAppForm } from '@/modules/form/hooks'
import { usePageDictionary } from '@/modules/i18n/hooks/dictionaries'
import { CATEGORIES } from '../../constants'
import { useCategoryCreate } from '../../lib'

const _CategoryCreateSchema = type({
  color: 'string',
  name: 'string',
  uid: 'string',
  iconUid: 'string',
  settingsId: 'string',
})

export type CategoryCreateFormProps = {
  labels: ReturnType<typeof getCategoriesDictionary>
}
export default function CategoryCreateForm({
  labels,
}: CategoryCreateFormProps) {
  const {
    form: { create: formLabels },
  } = labels

  const { mutate } = useCategoryCreate()
  const { AppField, AppForm, Label, Item, Message, Button } = useAppForm({
    validators: {
      onSubmit: _CategoryCreateSchema
    },
    onSubmit: ({ value }) => mutate({
      
    }),
  })

  return (
    <AppForm>
      <div className="flex w-full items-center gap-2.5">
        <AppField
          children={({ Input }) => (
            <Item className="grow">
              <Label>{formLabels.fields.name.label}</Label>
              <Input />
              <Message />
            </Item>
          )}
          name="name"
        />
        <AppField
          children={({ Select }) => (
            <Item className="w-full shrink-0 basis-2/12">
              <Label>{formLabels.fields.iconUid.label}</Label>
              <Select
                name="iconUid"
                options={CATEGORIES.map(({ Icon, name }) => ({
                  value: name,
                  icon: <Icon className="size-4" />,
                }))}
              />
              <Message />
            </Item>
          )}
          name="iconUid"
        />
      </div>
      <Button />
    </AppForm>
  )
}
