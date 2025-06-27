import { relations } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

import { ingredients } from './ingredients'
import { baseTableColumns } from '../utils'

export const userSettingsCategories = sqliteTable('categories', {
	...baseTableColumns,
	uid: text('uid').notNull().unique(),
	iconUid: text('icon_uid'),
	color: text('color').notNull()
})

export const categoriesRelations = relations(
	userSettingsCategories,
	({ many }) => ({
		items: many(ingredients)
	})
)
