import { useAppForm } from '@/modules/form'
import { z } from 'zod'
import { useCategoriesRouter } from '../lib'

export default function CategoryCreateForm() {
	const { useCategoryCreate, useCategoryUpdate } = useCategoriesRouter()
	const { mutate } = useCategoryUpdate()

	const Form = useAppForm({
		validators: {
			onSubmit: z.object({})
		}
	})
}
