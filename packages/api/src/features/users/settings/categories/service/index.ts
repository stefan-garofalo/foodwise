import { createBaseProcedures } from '#lib/index.js'
import { userSettingsCategories } from '@foodwise/db/schema'

export const { create, update, remove, get, getAll } = createBaseProcedures(
	userSettingsCategories
)
