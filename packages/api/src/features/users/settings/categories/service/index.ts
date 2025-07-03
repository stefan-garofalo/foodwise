import { userSettingsCategories } from '@foodwise/db/schema'
import { createBaseProcedures } from '@/lib'
export const { create, update, remove, get, getAll } = createBaseProcedures(
	userSettingsCategories
)
