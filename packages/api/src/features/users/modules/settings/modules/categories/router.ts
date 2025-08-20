import { userSettingsCategories } from '@foodwise/db/schema'
import {
  buildRemoveProcedure,
  buildSelectProcedure,
  buildUpdateProcedure,
} from '../../../../../../lib/crud/service'
import { router } from '../../../../../../trpc'
import service from './service'

export const categoriesRouter = router({
  select: buildSelectProcedure(userSettingsCategories),
  update: buildUpdateProcedure(userSettingsCategories),
  remove: buildRemoveProcedure(userSettingsCategories),
  ...service,
})
