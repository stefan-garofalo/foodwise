import { db } from '@foodwise/db/client'
import type { BaseSQLiteTable } from '@foodwise/db/utils/index'
import type { SQLiteUpdateSetSource } from '@foodwise/db/utils/types'

import { type } from 'arktype'
import { createInsertSchema } from 'drizzle-arktype'
import { err, ok } from 'neverthrow'

import type { ParserLike, TableColumns } from '../types'

export function getCreateSchema<T extends BaseSQLiteTable>(table: T) {
  return type({
    '...': createInsertSchema(table) as any,
  }).assert as any as ParserLike<TableColumns<T>>
}

export type CreateMutationData<T extends BaseSQLiteTable = BaseSQLiteTable> =
  TableColumns<T>
export async function getCreateMutation<T extends BaseSQLiteTable>(
  table: T,
  data: CreateMutationData<T>
) {
  try {
    return ok(
      await db
        .insert(table)
        .values(data as T['$inferInsert'])
        .onConflictDoUpdate({
          target: table.id,
          set: data as unknown as SQLiteUpdateSetSource<T>,
        })
        .returning()
    )
  } catch (error) {
    return err(error)
  }
}
