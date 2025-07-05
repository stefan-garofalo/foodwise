import { err, ok } from 'neverthrow'
import {
	eq,
	inArray,
	getTableColumns,
	type BaseSQLiteTable
} from '@foodwise/db/utils/index'

import { createSelectSchema, createInsertSchema } from 'drizzle-arktype'
import { type Type, type } from 'arktype'

import { type SQLiteUpdateSetSource } from '@foodwise/db/utils/types'

import { authedProcedure } from '#api/trpc.js'
import { userSettingsCategories } from '@foodwise/db/schema'
import type { AnyTRPCMutationProcedure } from '@trpc/server'
import { type LibSqlDB } from '@foodwise/db/client'

/**
 *  A _minimal_ view of a Parser that TRPC is happy with.
 *  · `parse` is required at runtime.
 *  · the two phantom fields give us good compile-time inference.
 */
type ParserLike<TIn, TOut = TIn> = {
	parse: (data: unknown) => TOut
	_input?: TIn // phantom – never read at runtime
	_output?: TOut // phantom
}

type InsertInput<T extends BaseSQLiteTable> = T['$inferInsert']

function createInsertValidator<T extends BaseSQLiteTable>(table: T): any {
	return type({
		'...': createInsertSchema(table) as any
	}) as any // run-time object, keep it opaque
}

function buildCreateProcedure<T extends BaseSQLiteTable>(table: T) {
	// 1. Get the real validator
	// 2. Give TS only the slim façade, with the INPUT we want
	// 3. Feed that to TRPC – no generic argument needed
	return authedProcedure
		.input(createInsertValidator(table) as unknown as ParserLike<InsertInput<T>>)
		.mutation(async ({ input, ctx: { db } }) =>
			ok(
				await db
					.insert(table)
					.values(input)
					.onConflictDoUpdate({
						target: table.id,
						set: input as SQLiteUpdateSetSource<T>
					})
					.returning()
			)
		)
}

export function createBaseProcedures<T extends BaseSQLiteTable>(table: T) {
	return { create: buildCreateProcedure(table) } as const
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
