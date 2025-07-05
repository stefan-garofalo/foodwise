import { err, ok } from 'neverthrow'
import {
	eq,
	inArray,
	getTableColumns,
	type BaseSQLiteTable
} from '@foodwise/db/utils/index'

import { buildCreateProcedure } from './operations/create'
import { buildUpdateProcedure } from './operations/update'

export function createBaseProcedures<T extends BaseSQLiteTable>(table: T) {
	return {
		create: buildCreateProcedure(table),
		update: buildUpdateProcedure(table)
	} as const
}

// update: authedProcedure
// 	.input(
// 		z.object({
// 			values: z
// 				.custom<ReturnType<typeof createUpdateSchema<TTable>>>()
// 				.optional(),
// 			id: z.string()
// 		})
// 	)
// 	.mutation(async ({ input, ctx: { db } }) => {
// 		try {
// 			return ok(
// 				await db
// 					.update(table as TTable)
// 					.set({
// 						...(input?.values! as SQLiteUpdateSetSource<TTable>),
// 						updatedAt: new Date()
// 					} as SQLiteUpdateSetSource<TTable>)
// 					.where(eq(table.id, input?.id!))
// 					.returning()
// 			)
// 		} catch (error) {
// 			return err(error)
// 		}
// 	}),

// remove: authedProcedure
// 	.input(z.object({ id: z.array(z.string()).or(z.string()) }))
// 	.mutation(async ({ input: { id }, ctx: { db } }) => {
// 		try {
// 			await db
// 				.delete(table)
// 				.where(inArray(table.id, Array.isArray(id) ? id : [id]))
// 			return ok({ id })
// 		} catch (error) {
// 			return err(error)
// 		}
// 	})

// get: authedProcedure
// 	.input(type({ id: 'string', columns: object(createSelectSchema(table)) }))
// 	.query(async ({ input: { id, columns }, ctx: { db } }) => {
// 		try {
// 			return ok(
// 				await db
// 					.select(
// 						columns
// 							? Object.fromEntries(
// 									Object.entries(getTableColumns(table)).filter(
// 										([key]) => columns[key as keyof typeof columns] === true
// 									)
// 								)
// 							: getTableColumns(table)
// 					)
// 					.from(table)
// 					.where(eq(table.id, id as string))
// 					.limit(1)
// 			)
// 		} catch (error) {
// 			return err(error)
// 		}
// 	}),
// getAll: authedProcedure.query(async ({ ctx: { db } }) => {
// 	try {
// 		return ok(await db.select(getTableColumns(table)).from(table))
// 	} catch (error) {
// 		return err(error)
// 	}
// })
