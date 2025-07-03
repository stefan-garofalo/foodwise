import { sqliteTable } from 'drizzle-orm/sqlite-core'
import { userSettingsCategories } from './categories'
import { relations } from 'drizzle-orm'
import { baseTableColumns } from '#utils/index.js'

export * from './categories'

export const userSettings = sqliteTable('user_settings', {
	...baseTableColumns
})

export const userSettingsRelations = relations(userSettings, ({ many }) => ({
	categories: many(userSettingsCategories)
}))
