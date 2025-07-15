import { relations } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { baseTableColumns } from '#db/utils/index.js'
import { userSettings } from './settings'

export * from './settings'

// Reference the existing user table created by better-auth without trying to create it
// Using regular sqliteTable but we'll exclude it from migrations in the config
const _betterAuthUsers = sqliteTable('user', {
  id: text('id').primaryKey(),
})

export const userProfiles = sqliteTable('user_profiles', {
  ...baseTableColumns,
  userId: text('user_id')
    .notNull()
    .unique()
    .references(() => _betterAuthUsers.id, {
      onDelete: 'cascade',
    }),
  settingsId: text('settings_id')
    .notNull()
    .unique()
    .references(() => userSettings.id, {
      onDelete: 'cascade',
    }),
})

export const userRelations = relations(_betterAuthUsers, ({ one }) => ({
  profile: one(userProfiles, {
    fields: [_betterAuthUsers.id],
    references: [userProfiles.userId],
  }),
}))

export const userProfileRelations = relations(userProfiles, ({ one }) => ({
  user: one(_betterAuthUsers, {
    fields: [userProfiles.userId],
    references: [_betterAuthUsers.id],
  }),

  settings: one(userSettings, {
    fields: [userProfiles.settingsId],
    references: [userSettings.id],
  }),
}))
