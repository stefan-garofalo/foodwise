import { z } from 'zod'
import { err, ok } from 'neverthrow'
import { eq, inArray } from 'drizzle-orm'

import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema
} from '@repo/db/schema/utils'
import { authedProcedure } from '../trpc'

import { BaseSQLiteTable } from '@repo/db/utils'
import { SQLiteUpdateSetSource } from 'drizzle-orm/sqlite-core'

export function createBaseProcedures<TTable extends BaseSQLiteTable>(
	table: TTable
) {
	return {
		create: authedProcedure
			.input(createInsertSchema(table))
			.mutation(async ({ input, ctx: { db } }) => {
				try {
					const query = await db
						.insert(table)
						.values(input as TTable['$inferInsert'])
						.onConflictDoUpdate({
							target: table.id,
							set: input as SQLiteUpdateSetSource<TTable>
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
					values: createUpdateSchema<TTable>(table),
					id: z.string()
				})
			)
			.mutation(async ({ input, ctx: { db } }) => {
				try {
					const query = await db
						.update(table)
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

		get: authedProcedure
			.input(
				z.object({
					id: z.string(),
					columns: createSelectSchema(table)
				})
			)
			.query(async ({ input: { id, columns }, ctx: { db } }) => {
				try {
					return ok(
						await db.query[table._.name].findFirst({
							columns,
							where: (table, { eq }) => eq(table.id, id)
						})
					)
				} catch (error) {
					return err(error)
				}
			}),

		getAll: authedProcedure.query(async ({ ctx: { db } }) => {
			try {
				return ok(await db.query[table._.name].findMany({}))
			} catch (error) {
				return err(error)
			}
		})
	}
}
