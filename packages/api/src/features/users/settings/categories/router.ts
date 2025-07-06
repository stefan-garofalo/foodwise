import { router } from '#api/trpc.js'
import {
	create,
	update,
	remove,
	get

	//	get, getAll, remove, update
} from './service'

export const categoriesRouter = router({
	create,
	update,
	remove,
	get
})
