'use client'

import { type } from 'arktype'
import type { getCategoriesDictionary } from '@/app/[lang]/(protected)/settings/categories/dictionary'
import { useAppForm } from '@/modules/form/hooks'

import { merge } from '@/modules/ui/utils/tailwind'
import { CATEGORIES, COLORS } from '../../constants'
import { useCategoryCreate, useUserSettings } from '../../lib'

const CategoryCreateSchema = type({
  color: 'string',
  name: 'string',
  iconUid: 'string',
})

export type CategoryCreateFormProps = {
  labels: ReturnType<typeof getCategoriesDictionary>
}
export default function CategoryCreateForm({
  labels,
}: CategoryCreateFormProps) {
  const {
    form: { create: formLabels },
    constants,
  } = labels

  // const { mutate } = useCategoryCreate()

  const { AppField, AppForm, FieldItem, Form, SubmitButton } = useAppForm({
    defaultValues: {
      color: COLORS[0].value,
      iconUid: CATEGORIES[0].name,
      name: '',
    },
    validators: {
      onSubmit: CategoryCreateSchema,
    },
    // onSubmit: ({ value }) => {},
  })

  return (
    <AppForm>
      <Form>
        <AppField
          children={({ Input }) => (
            <FieldItem className="grow" label={formLabels.fields.name.label}>
              <Input name="name" />
            </FieldItem>
          )}
          name="name"
        />
        <div className="flex items-start gap-2.5">
          <AppField
            children={({ Select }) => (
              <FieldItem
                className="w-full shrink-0 basis-1/2"
                label={formLabels.fields.iconUid.label}
              >
                <Select
                  name="iconUid"
                  options={CATEGORIES.map(({ Icon, name, label }) => ({
                    value: name,
                    label: constants.icons[label],
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
                className="w-full shrink-0 basis-1/2"
                label={formLabels.fields.color.label}
              >
                <Select
                  name="color"
                  options={COLORS.map(({ value, className, label }) => ({
                    value,
                    label: constants.colors[label],
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

        <SubmitButton />
      </Form>
    </AppForm>
  )
}
