import { useAppForm } from '@/modules/form'
import { z } from 'zod'
import { useCategoriesRouter } from '../lib'

export default function CategoryCreateForm() {
	const { useCategoryCreate, useCategoryGet } = useCategoriesRouter()
	const { mutate } = useCategoryCreate()
	const { data } = useCategoryGet({
		id: '',
		columns: {
			color: true,
			name: true
		}
	})
	const Form = useAppForm({
		validators: {
			onSubmit: z.object({})
		}
	})
}
