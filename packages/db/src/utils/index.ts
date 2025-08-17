import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import type { Tables } from './types'

export const baseTableColumns = {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
} as const

const baseType = sqliteTable('base' as Tables, baseTableColumns)
export type BaseSQLiteTable = typeof baseType

export { eq, getTableColumns, inArray } from 'drizzle-orm'
