import type { Tables } from '#schema/utils/index.js'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const baseTableColumns = {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => Bun.randomUUIDv7()),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date())
} as const

export type BaseSQLiteTable = typeof baseType
const baseType = sqliteTable('base' as Tables, baseTableColumns)

export { getTableColumns } from 'drizzle-orm'

export { eq, inArray } from 'drizzle-orm'
