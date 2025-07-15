import type { BaseSQLiteTable } from '@foodwise/db/utils/index'
import { inArray } from '@foodwise/db/utils/index'
import { type } from 'arktype'
import { err, ok } from 'neverthrow'
import { authedProcedure } from '#api/trpc.js'

export function buildRemoveProcedure<T extends BaseSQLiteTable>(table: T) {
  return authedProcedure
    .input(type({ id: 'string | string[]' }).assert)
    .mutation(async ({ input: { id }, ctx: { db } }) => {
      try {
        await db
          .delete(table)
          .where(inArray(table.id, Array.isArray(id) ? id : [id]))
        return ok({ id })
      } catch (error) {
        return err(error)
      }
    })
}
