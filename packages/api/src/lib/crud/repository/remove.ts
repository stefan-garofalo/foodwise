import { db } from '@foodwise/db/client'
import type { BaseSQLiteTable } from '@foodwise/db/utils/index'
import { inArray } from '@foodwise/db/utils/index'
import { type } from 'arktype'
import { err, ok } from 'neverthrow'

export function getRemoveSchema() {
  return type({ id: 'string | string[]' }).assert
}

export async function getRemoveMutation<T extends BaseSQLiteTable>(
  table: T,
  input: { id: string | string[] }
) {
  try {
    await db
      .delete(table)
      .where(inArray(table.id, Array.isArray(input.id) ? input.id : [input.id]))
    return ok({ id: input.id })
  } catch (error) {
    return err(error)
  }
}
