import { Table } from 'drizzle-orm'
import { z } from 'zod'

export { createInsertSchema, createUpdateSchema } from 'drizzle-zod'
/**
 * Creates a Zod select schema from a Drizzle table definition.
 * The schema allows selecting any column from the table using boolean flags.
 *
 * @param table - The Drizzle table definition
 * @returns A Zod schema for validating select inputs
 */
export const createSelectSchema = <T extends Table>(table: T) => {
	const columnNames = Object.keys(table)
	const selectFields = columnNames.reduce(
		(acc, columnName) => {
			acc[columnName] = z.boolean()
			return acc
		},
		{} as Record<string, z.ZodBoolean>
	)

	return z.object(selectFields).optional()
}

export const toSelectFields = (fields?: Record<string, any>) =>
	fields
		? Object.keys(fields).reduce(
				(acc, key) => {
					if (fields[key]) acc[key] = true
					return acc
				},
				{} as Record<string, true>
			)
		: {}

export type Tables = 'categories' | 'ingredients'
