import { type BaseSQLiteTable } from '@foodwise/db/utils/index'

import { buildCreateProcedure } from './operations/create'
import { buildUpdateProcedure } from './operations/update'
import { buildRemoveProcedure } from './operations/remove'
import { buildGetProcedure } from './operations/get'

export function createBaseProcedures<T extends BaseSQLiteTable>(table: T) {
	return {
		create: buildCreateProcedure(table),
		update: buildUpdateProcedure(table),
		remove: buildRemoveProcedure(table),
		get: buildGetProcedure(table)
	} as const
}
