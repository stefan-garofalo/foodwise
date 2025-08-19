import { db } from '@foodwise/db/client'
import { err, ok } from 'neverthrow'

async function getUserSettings(userId: string) {
  try {
    const settings = await db.query.userSettings.findFirst({
      where: ({ id }, { eq }) => eq(id, userId),
    })
    if (!settings) throw new Error('settings_not_found')
    return ok(settings)
  } catch (error) {
    return err(error)
  }
}

export const usersRepository = { getUserSettings } as const
