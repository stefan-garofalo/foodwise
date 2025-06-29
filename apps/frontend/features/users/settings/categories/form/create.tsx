import { useAppForm } from '@/modules/form'
import { z } from 'zod'
import { useCategoriesRouter } from '../lib'

export default function CategoryCreateForm() {
	const { useCategoryCreate, useCategoryGet } = useCategoriesRouter()
	const { mutate } = useCategoryCreate()
	const { data } = useCategoryGet({ id: '' })

	const Form = useAppForm({
		validators: {
			onSubmit: z.object({})
		}
	})
}
