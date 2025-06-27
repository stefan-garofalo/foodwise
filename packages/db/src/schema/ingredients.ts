import { sqliteTable, text, real, integer } from 'drizzle-orm/sqlite-core'

import { relations } from 'drizzle-orm'
import { userSettingsCategories } from './user-settings-categories'
import { baseTableColumns } from '../utils'

export const ingredients = sqliteTable('ingredients', {
	...baseTableColumns,
	name: text('name').notNull(),
	categoryId: text('category_id').references(() => userSettingsCategories.id, {
		onDelete: 'set null'
	}),
	quantity: real('quantity').notNull(),
	unit: text('unit').default('g').notNull(),
	expirationDate: integer('expiration_date', { mode: 'timestamp' }),
	openedDate: integer('opened_date', { mode: 'timestamp' }), // Also indicates leftover status
	lowQuantityThreshold: real('low_quantity_threshold')
})

export const ingredientsRelations = relations(ingredients, ({ one }) => ({
	category: one(userSettingsCategories, {
		fields: [ingredients.categoryId],
		references: [userSettingsCategories.id]
	})
}))
