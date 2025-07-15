import type { BaseSQLiteTable } from '@foodwise/db/utils/index'

import { buildCreateProcedure } from './operations/create'
import { buildGetProcedure } from './operations/get'
import { buildRemoveProcedure } from './operations/remove'
import { buildUpdateProcedure } from './operations/update'

export function createBaseProcedures<T extends BaseSQLiteTable>(table: T) {
  return {
    create: buildCreateProcedure(table),
    update: buildUpdateProcedure(table),
    remove: buildRemoveProcedure(table),
    get: buildGetProcedure(table),
  } as const
}
