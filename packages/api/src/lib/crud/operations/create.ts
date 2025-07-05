import { authedProcedure } from '#api/trpc.js'
import type { BaseSQLiteTable } from '@foodwise/db/utils/index'
import { type } from 'arktype'
import { createInsertSchema } from 'drizzle-arktype'
import { ok } from 'neverthrow'
import type { ParserLike, TableColumns } from '../types'
import type { SQLiteUpdateSetSource } from '@foodwise/db/utils/types'

export function buildCreateProcedure<T extends BaseSQLiteTable>(table: T) {
	return authedProcedure
		.input(
			type({
				'...': createInsertSchema(table) as any
			}) as any as ParserLike<TableColumns<T>>
		)
		.mutation(async ({ input, ctx: { db } }) =>
			ok(
				await db
					.insert(table)
					.values(input as T['$inferInsert'])
					.onConflictDoUpdate({
						target: table.id,
						set: input as SQLiteUpdateSetSource<T>
					})
					.returning()
			)
		)
}
