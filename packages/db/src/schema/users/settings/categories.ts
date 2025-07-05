import { relations } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

import { baseTableColumns } from '#db/utils/index.js'
import { ingredients } from '#db/schema/ingredients.js'
import { userSettings } from '.'

export const userSettingsCategories = sqliteTable('user_settings_categories', {
	...baseTableColumns,
	settingsId: text('settings_id')
		.notNull()
		.references(() => userSettings.id, {
			onDelete: 'cascade' // Delete categories when user settings are deleted
		}),
	uid: text('uid').notNull().unique(),
	iconUid: text('icon_uid'),
	color: text('color').notNull(),
	name: text('name').notNull()
})

export const categoriesRelations = relations(
	userSettingsCategories,
	({ many, one }) => ({
		// Many ingredients can be in this category
		items: many(ingredients),
		// This category belongs to one settings object
		settings: one(userSettings, {
			fields: [userSettingsCategories.settingsId],
			references: [userSettings.id]
		})
	})
)
