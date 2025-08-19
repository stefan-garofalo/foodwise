import { userSettingsCategories } from '@foodwise/db/schema'
import {
  buildRemoveProcedure,
  buildSelectProcedure,
  buildUpdateProcedure,
} from '#api/lib/crud/service.js'
import { router } from '#api/trpc.js'
import service from './service'

export const categoriesRouter = router({
  select: buildSelectProcedure(userSettingsCategories),
  update: buildUpdateProcedure(userSettingsCategories),
  remove: buildRemoveProcedure(userSettingsCategories),
  ...service,
})
