import { useAppForm } from '@/modules/form'
import { useCategoriesRouter } from '../lib'
import { type } from 'arktype'

const CategoryCreateSchema = type({
	color: 'string',
	name: 'string',
	uid: 'string',
	iconUid: 'string',
	settingsId: 'string'
})

export default function CategoryCreateForm() {
	const { useCategoryCreate } = useCategoriesRouter()
	const { mutate } = useCategoryCreate()

	const Form = useAppForm({
		validators: {
			onSubmit: CategoryCreateSchema
		}
	})
}
