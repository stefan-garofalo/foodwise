import { router } from '#trpc.js'
import { categoriesRouter } from './categories/router'

export const settingsRouter = router({
	categories: categoriesRouter
})
