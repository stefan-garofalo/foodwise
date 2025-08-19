import { userSettings } from '@foodwise/db/schema'
import {
  buildCreateProcedure,
  buildRemoveProcedure,
  buildSelectProcedure,
  buildUpdateProcedure,
} from '#api/lib/crud/service.js'
import { router } from '#api/trpc.js'
import { categoriesRouter } from './modules/categories/router'

export const settingsRouter = router({
  categories: categoriesRouter,
  create: buildCreateProcedure(userSettings),
  get: buildSelectProcedure(userSettings),
  update: buildUpdateProcedure(userSettings),
  remove: buildRemoveProcedure(userSettings),
})
