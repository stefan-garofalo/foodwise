import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { Tables } from '../schema/utils'

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
