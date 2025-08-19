import { db } from '@foodwise/db/client'
import type { BaseSQLiteTable } from '@foodwise/db/utils/index'
import { eq } from '@foodwise/db/utils/index'
import type { SQLiteUpdateSetSource } from '@foodwise/db/utils/types'
import { type } from 'arktype'
import { createInsertSchema } from 'drizzle-arktype'
import { err, ok } from 'neverthrow'
import type { ParserLike, TableColumns } from '../types'

type UpdateInput<T extends BaseSQLiteTable> = {
  id: string
  values: Partial<TableColumns<T>>
}
export function getUpdateSchema<TTable extends BaseSQLiteTable>(table: TTable) {
  return type({
    id: 'string',
    values: createInsertSchema(table).optional(),
  }).assert as unknown as ParserLike<UpdateInput<TTable>>
}

export async function getUpdateMutation<TTable extends BaseSQLiteTable>(
  table: TTable,
  input: UpdateInput<TTable>
) {
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
}
