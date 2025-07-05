import { authedProcedure } from '#api/trpc.js'
import type { BaseSQLiteTable } from '@foodwise/db/utils/index'
import { eq } from '@foodwise/db/utils/index'
import { type } from 'arktype'
import { createInsertSchema } from 'drizzle-arktype'
import { ok, err } from 'neverthrow'
import type { ParserLike, TableColumns } from '../types'
import type { SQLiteUpdateSetSource } from '@foodwise/db/utils/types'

// All columns optional – suitable for a partial update payload
type UpdateInput<T extends BaseSQLiteTable> = {
	id: string
	values?: Partial<TableColumns<T>>
}

export function buildUpdateProcedure<T extends BaseSQLiteTable>(table: T) {
	// Runtime validator: id + optional values adhering to table schema
	return authedProcedure
		.input(
			type({
				id: 'string',
				values: createInsertSchema(table).optional()
			}) as unknown as ParserLike<UpdateInput<T>>
		)
		.mutation(async ({ input, ctx: { db } }) => {
			try {
				return ok(
					await db
						.update(table)
						.set({
							...((input.values ?? {}) as SQLiteUpdateSetSource<T>),
							updatedAt: new Date()
						} as SQLiteUpdateSetSource<T>)
						.where(eq(table.id, input.id))
						.returning()
				)
			} catch (error) {
				return err(error)
			}
		})
}
