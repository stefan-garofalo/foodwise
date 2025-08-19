import { db } from '@foodwise/db/client'
import type { BaseSQLiteTable } from '@foodwise/db/utils/index'
import { eq, getTableColumns } from '@foodwise/db/utils/index'
import { scope, type } from 'arktype'
import { createSelectSchema } from 'drizzle-arktype'
import { err, ok } from 'neverthrow'
import type { ColumnFlags, ParserLike } from '../types'

type GetInput<T extends BaseSQLiteTable> = {
  id: string
  columns?: ColumnFlags<T>
}

export function getSelectSchema<T extends BaseSQLiteTable>(table: T) {
  return type({
    id: 'string',
    selectableColumns: scope({
      Keys: type({ '...': createSelectSchema(table) as any }).keyof(),
      Flags: { '[Keys]': 'boolean' },
    }).type('Flags'),
  }).assert as unknown as ParserLike<GetInput<T>>
}

export async function getSelectQuery<T extends BaseSQLiteTable>(
  table: T,
  input: GetInput<T>
) {
  const { id, columns } = input
  try {
    return ok(
      await db
        .select(
          columns
            ? Object.fromEntries(
                Object.entries(getTableColumns(table)).filter(
                  ([key]) => columns[key as keyof typeof columns] === true
                )
              )
            : getTableColumns(table)
        )
        .from(table)
        .where(eq(table.id, id as string))
        .limit(1)
    )
  } catch (error) {
    return err(error)
  }
}
