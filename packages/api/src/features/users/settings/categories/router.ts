import { router } from '#api/trpc.js'
import {
  create,
  get,
  remove,
  update,

  //	get, getAll, remove, update
} from './service'

export const categoriesRouter = router({
  create,
  update,
  remove,
  get,
})
