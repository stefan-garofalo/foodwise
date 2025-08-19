import type { BaseSQLiteTable } from '@foodwise/db/utils/index'
import { authedProcedure } from '#api/trpc.js'
import { getCreateMutation, getCreateSchema } from './repository/create'
import { getRemoveMutation, getRemoveSchema } from './repository/remove'
import { getSelectQuery, getSelectSchema } from './repository/select'
import { getUpdateMutation, getUpdateSchema } from './repository/update'

export function buildCreateProcedure<T extends BaseSQLiteTable>(table: T) {
  return authedProcedure
    .input(getCreateSchema(table))
    .mutation(async ({ input }) => getCreateMutation(table, input!))
}

export function buildSelectProcedure<T extends BaseSQLiteTable>(table: T) {
  return authedProcedure
    .input(getSelectSchema(table))
    .query(async ({ input }) => getSelectQuery(table, input))
}

export function buildUpdateProcedure<TTable extends BaseSQLiteTable>(
  table: TTable
) {
  return authedProcedure
    .input(getUpdateSchema(table))
    .mutation(async ({ input }) => getUpdateMutation(table, input))
}

export function buildRemoveProcedure<T extends BaseSQLiteTable>(table: T) {
  return authedProcedure
    .input(getRemoveSchema())
    .mutation(async ({ input }) => getRemoveMutation(table, input))
}
