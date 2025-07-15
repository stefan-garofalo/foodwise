import { userSettingsCategories } from '@foodwise/db/schema'
import { createBaseProcedures } from '#api/lib/crud/index.js'

export const { create, update, remove, get } = createBaseProcedures(
  userSettingsCategories
)
