import { useAppForm } from '@/modules/form'
import { z } from 'zod'
import { useCategoriesRouter } from '../lib'
import { useTRPC } from '@/modules/trpc/client'
import { useMutation } from '@tanstack/react-query'

export default function CategoryCreateForm() {
	const { useCategoryCreate, useCategoryGet } = useCategoriesRouter()
	const { mutate } = useCategoryCreate()
	const {data} = useCategoryGet()
	data
	const Form = useAppForm({
		validators: {
			onSubmit: z.object({})
		}
	})
}
