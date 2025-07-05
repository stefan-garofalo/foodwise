import { createBaseProcedures } from '#api/lib/index.js'
import { userSettingsCategories } from '@foodwise/db/schema'

export const { create } = createBaseProcedures(userSettingsCategories)
