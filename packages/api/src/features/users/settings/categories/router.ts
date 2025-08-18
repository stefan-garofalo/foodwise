import { userSettingsCategories } from '@foodwise/db/schema'
import { createBaseProcedures } from '#api/lib/crud/index.js'
import { router } from '#api/trpc.js'

export const categoriesRouter = router(
  createBaseProcedures(userSettingsCategories)
)
