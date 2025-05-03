import { z } from 'zod'
import { err, ok } from 'neverthrow'
import { eq, inArray } from '@repo/db/utils'

import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
	toSelectFields
} from '@repo/db/schema/utils'
import { authedProcedure } from '../trpc'

import { BaseSQLiteTable } from '@repo/db/utils'
import { SQLiteTable, SQLiteUpdateSetSource } from 'drizzle-orm/sqlite-core'

export function createBaseProcedures<TTable extends BaseSQLiteTable>(
	table: TTable
) {
	return {
		create: authedProcedure
			.input(createInsertSchema(table as unknown as SQLiteTable))
			.mutation(async ({ input, ctx: { db } }) => {
				try {
					const query = await db
						.insert(table as unknown as BaseSQLiteTable)
						.values(input as TTable['$inferInsert'])
						.onConflictDoUpdate({
							target: (table as unknown as BaseSQLiteTable).id,
							set: input as SQLiteUpdateSetSource<SQLiteTable>
						})
						.returning()
					return ok(Array.isArray(input) ? query : query[0])
				} catch (error) {
					return err(error)
				}
			}),

		update: authedProcedure
			.input(
				z.object({
					values: createUpdateSchema<SQLiteTable>(table as unknown as SQLiteTable),
					id: z.string()
				})
			)
			.mutation(async ({ input, ctx: { db } }) => {
				try {
					const query = await db
						.update(table as unknown as BaseSQLiteTable)
						.set({ ...input?.values!, updatedAt: new Date() })
						.where(eq(table.id, input?.id!))
						.returning()
					return ok(Array.isArray(input?.values!) ? query : query[0])
				} catch (error) {
					return err(error)
				}
			}),

		remove: authedProcedure
			.input(z.object({ id: z.array(z.string()).or(z.string()) }))
			.mutation(async ({ input: { id }, ctx: { db } }) => {
				try {
					await db
						.delete(table)
						.where(inArray(table.id, Array.isArray(id) ? id : [id]))
					return ok({ id })
				} catch (error) {
					return err(error)
				}
			}),

		get: authedProcedure.query(async ({ ctx: { db } }) => {}),
		getAll: authedProcedure.query(async ({ ctx: { db } }) => {})
		// get: authedProcedure
		// 	.input(
		// 		z.object({
		// 			id: z.string(),
		// 			columns: createSelectSchema(table)
		// 		})
		// 	)
		// 	.query(async ({ input: { id, columns }, ctx: { db } }) => {
		// 		// db.query.categories.findFirst({
		// 		// 	columns: toSelectFields(columns),
		// 		// 	where: (table, { eq }) => eq(table.id, id)
		// 		// })
		// 		try {
		// 			return ok(
		// 				await db.query[table._.name].findFirst({
		// 					columns: toSelectFields(columns),
		// 					where: (t: TTable, { eq }: { eq: typeof eq }) => eq(t.id, id)
		// 				})
		// 			)
		// 		} catch (error) {
		// 			return err(error)
		// 		}
		// 	}),

		// getAll: authedProcedure.query(async ({ ctx: { db } }) => {
		// 	try {
		// 		return ok(await db.query[table._.name].findMany({}))
		// 	} catch (error) {
		// 		return err(error)
		// 	}
		// })
	}
}
