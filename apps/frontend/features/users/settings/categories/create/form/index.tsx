'use client'

import { type } from 'arktype'
import type { getCategoriesDictionary } from '@/app/[lang]/(protected)/settings/categories/dictionary'
import { useAppForm } from '@/modules/form/hooks'

import { merge } from '@/modules/ui/utils/tailwind'
import { CATEGORIES, COLORS } from '../../constants'
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
  const { AppField, AppForm, FieldItem, Button } = useAppForm({
    validators: {
      onSubmit: _CategoryCreateSchema,
    },
    onSubmit: ({ value }) => mutate({}),
  })

  return (
    <AppForm>
      <div className="flex w-full items-center gap-2.5">
        <AppField
          children={({ Input }) => (
            <FieldItem className="grow" label={formLabels.fields.name.label}>
              <Input />
            </FieldItem>
          )}
          name="name"
        />
        <AppField
          children={({ Select }) => (
            <FieldItem
              className="w-full shrink-0 basis-2/12"
              label={formLabels.fields.iconUid.label}
            >
              <Select
                name="iconUid"
                options={CATEGORIES.map(({ Icon, name }) => ({
                  value: name,
                  icon: <Icon className="size-4" />,
                }))}
              />
            </FieldItem>
          )}
          name="iconUid"
        />
        <AppField
          children={({ Select }) => (
            <FieldItem
              className="w-full shrink-0 basis-[14.5%]"
              label={formLabels.fields.color.label}
            >
              <Select
                name="color"
                options={COLORS.map(({ value, className }) => ({
                  value,
                  icon: (
                    <div
                      className={merge(
                        'aspect-square size-4 rounded',
                        className
                      )}
                    />
                  ),
                }))}
              />
            </FieldItem>
          )}
          name="color"
        />
      </div>
      <Button />
    </AppForm>
  )
}
