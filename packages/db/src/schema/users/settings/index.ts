import { relations } from 'drizzle-orm'
import { sqliteTable } from 'drizzle-orm/sqlite-core'
import { baseTableColumns } from '../../../utils/'
import { userSettingsCategories } from './categories'

export * from './categories'

export const userSettings = sqliteTable('user_settings', {
  ...baseTableColumns,
})

export const userSettingsRelations = relations(userSettings, ({ many }) => ({
  categories: many(userSettingsCategories),
}))
