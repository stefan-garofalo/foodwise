import { relations } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

import { ingredients } from './ingredients'
import { baseTableColumns } from '../utils'

export const categories = sqliteTable('categories', {
	...baseTableColumns,
	uid: text('uid').notNull().unique()
})

export const categoriesRelations = relations(categories, ({ many }) => ({
	items: many(ingredients)
}))
