import { userSettings } from '@foodwise/db/schema'
import {
  buildCreateProcedure,
  buildRemoveProcedure,
  buildSelectProcedure,
  buildUpdateProcedure,
} from '../../../../lib/crud/service'
import { router } from '../../../../trpc'
import { categoriesRouter } from './modules/categories/router'

export const settingsRouter = router({
  categories: categoriesRouter,
  create: buildCreateProcedure(userSettings),
  get: buildSelectProcedure(userSettings),
  update: buildUpdateProcedure(userSettings),
  remove: buildRemoveProcedure(userSettings),
})
