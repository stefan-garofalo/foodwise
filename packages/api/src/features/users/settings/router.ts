import { router } from '@/trpc'
import { categoriesRouter } from './categories/router'

export const settingsRouter = router({
	categories: categoriesRouter
})
