import { useAppForm } from '@/modules/form'
import { z } from 'zod'
import { useCategoriesRouter } from '../lib'

export default function CategoryCreateForm() {
	const { useCategoryCreate } = useCategoriesRouter()
	const { mutate } = useCategoryCreate()
mutate({

})
	const Form = useAppForm({
		validators: {
			onSubmit: z.object({})
		}
	})
}
