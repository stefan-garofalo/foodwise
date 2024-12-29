import { sqliteTable, text, real, integer } from 'drizzle-orm/sqlite-core'

import { relations } from 'drizzle-orm'
import { categories } from './categories'
import { baseTableColumns } from '../utils'

export const ingredients = sqliteTable('ingredients', {
	...baseTableColumns,
	name: text('name').notNull(),
	categoryId: text('category_id').references(() => categories.id, {
		onDelete: 'set null'
	}),
	quantity: real('quantity').notNull(),
	unit: text('unit').default('g').notNull(),
	expirationDate: integer('expiration_date', { mode: 'timestamp' }),
	openedDate: integer('opened_date', { mode: 'timestamp' }), // Also indicates leftover status
	lowQuantityThreshold: real('low_quantity_threshold')
})

// Define relations for type safety and querying
export const ingredientsRelations = relations(ingredients, ({ one }) => ({
	category: one(categories, {
		fields: [ingredients.categoryId],
		references: [categories.id]
	})
}))
