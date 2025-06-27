import { z } from 'zod'
import { err, ok } from 'neverthrow'
import { eq, inArray, type BaseSQLiteTable } from '@foodwise/db/utils/index'

import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
	toSelectFields
} from '@foodwise/db/schema/utils/index'
import { authedProcedure } from '../trpc'

import { SQLiteTable, type SQLiteUpdateSetSource } from 'drizzle-orm/sqlite-core'

export function createBaseProcedures<TTable extends BaseSQLiteTable>(
	table: TTable
) {
	return {
		create: authedProcedure
			.input(createInsertSchema(table))
			.mutation(async ({ input, ctx: { db } }) => {
				try {
					return ok(
						await db
							.insert(table)
							.values(input as TTable['$inferInsert'])
							.onConflictDoUpdate({
								target: table.id,
								set: input as SQLiteUpdateSetSource<SQLiteTable>
							})
							.returning()
					)
				} catch (error) {
					return err(error)
				}
			}),

		update: authedProcedure
			.input(
				z.object({
					values: createUpdateSchema<TTable>(table),
					id: z.string()
				})
			)
			.mutation(async ({ input, ctx: { db } }) => {
				try {
					return ok(
						await db
							.update(table as TTable)
							.set({
								...(input?.values! as SQLiteUpdateSetSource<TTable>),
								updatedAt: new Date()
							} as SQLiteUpdateSetSource<TTable>)
							.where(eq(table.id, input?.id!))
							.returning()
					)
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
