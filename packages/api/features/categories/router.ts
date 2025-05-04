import { router } from '../../trpc'
import { create, get, getAll, remove, update } from './service'

export const categoriesRouter = router({
	create,
	update,
	remove,
	get,
	getAll
})
