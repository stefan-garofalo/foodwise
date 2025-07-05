import { router } from '#api/trpc.js'
import {
	create,
	update

	//	get, getAll, remove, update
} from './service'

export const categoriesRouter = router({
	create,
	update
	// remove,
	// get,
	// getAll
})
