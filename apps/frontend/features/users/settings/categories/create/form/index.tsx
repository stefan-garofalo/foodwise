'use client'

import { useAppForm } from '@/modules/form/hooks'

import { type } from 'arktype'
import { useCategoryCreate } from '../../lib'

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
			// onSubmit: CategoryCreateSchema
		}
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
						settingsId: ''
					})
				)
			}}
		>
			<AppField name="name" children={(field) => <field.Input />} />
		</form>
	)
}
