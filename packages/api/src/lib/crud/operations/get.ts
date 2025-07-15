import type { BaseSQLiteTable } from '@foodwise/db/utils/index'
import { eq, getTableColumns } from '@foodwise/db/utils/index'
import { scope, type } from 'arktype'
import { createSelectSchema } from 'drizzle-arktype'
import { err, ok } from 'neverthrow'
import { authedProcedure } from '#api/trpc.js'
import type { ParserLike, TableColumns } from '../types'

// All columns optional – suitable for a partial update payload
type ColumnFlags<T extends BaseSQLiteTable> = {
  [K in keyof TableColumns<T>]?: boolean
}

type GetInput<T extends BaseSQLiteTable> = {
  id: string
  columns?: ColumnFlags<T>
}

export function buildGetProcedure<T extends BaseSQLiteTable>(table: T) {
  return authedProcedure
    .input(
      type({
        id: 'string',
        selectableColumns: scope({
          Keys: type({ '...': createSelectSchema(table) as any }).keyof(),
          Flags: { '[Keys]': 'boolean' },
        }).type('Flags'),
      }).assert as unknown as ParserLike<GetInput<T>>
    )
    .query(async ({ input: { id, columns }, ctx: { db } }) => {
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
    })
}
