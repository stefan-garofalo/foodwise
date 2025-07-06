'use client'

import { useAppForm } from '@/modules/form/hooks'
import { useCategoryCreate } from '../lib'
import { type } from 'arktype'

const CategoryCreateSchema = type({
	color: 'string',
	name: 'string',
	uid: 'string',
	iconUid: 'string',
	settingsId: 'string'
})

export default function CategoryCreateForm() {
	const { mutate } = useCategoryCreate()

	const { handleSubmit, AppField } = useAppForm({
		validators: {
			onSubmit: CategoryCreateSchema
		}
	})

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				handleSubmit(mutate)
			}}
		>
			<AppField name="name" children={(field) => <field.Input />} />
		</form>
	)
}
