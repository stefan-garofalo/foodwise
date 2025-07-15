import type { BaseSQLiteTable } from '@foodwise/db/utils/index'
import { eq } from '@foodwise/db/utils/index'
import type { SQLiteUpdateSetSource } from '@foodwise/db/utils/types'
import { type } from 'arktype'
import { createInsertSchema } from 'drizzle-arktype'
import { err, ok } from 'neverthrow'
import { authedProcedure } from '#api/trpc.js'
import type { ParserLike, TableColumns } from '../types'

// All columns optional – suitable for a partial update payload
type UpdateInput<T extends BaseSQLiteTable> = {
  id: string
  values?: Partial<TableColumns<T>>
}

export function buildUpdateProcedure<TTable extends BaseSQLiteTable>(
  table: TTable
) {
  return authedProcedure
    .input(
      type({
        id: 'string',
        values: createInsertSchema(table).optional(),
      }).assert as unknown as ParserLike<UpdateInput<TTable>>
    )
    .mutation(async ({ input, ctx: { db } }) => {
      try {
        return ok(
          await db
            .update(table as TTable)
            .set({
              ...(input?.values! as SQLiteUpdateSetSource<TTable>),
              updatedAt: new Date(),
            } as SQLiteUpdateSetSource<TTable>)
            .where(eq(table.id, input?.id!))
            .returning()
        )
      } catch (error) {
        return err(error)
      }
    })
}
