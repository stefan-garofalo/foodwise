import { createBaseProcedures } from '#api/lib/crud/index.js'
import { userSettingsCategories } from '@foodwise/db/schema'

export const { create, update } = createBaseProcedures(userSettingsCategories)
