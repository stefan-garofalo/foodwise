import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { baseTableColumns } from '../utils'
import { relations } from 'drizzle-orm'
import { ingredients } from './ingredients'

export const categories = sqliteTable('categories', {
	...baseTableColumns,
	uid: text('uid').notNull().unique()
})

export const categoriesRelations = relations(categories, ({ many }) => ({
	items: many(ingredients)
}))
