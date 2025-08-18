import { userProfiles, userSettings } from '@foodwise/db/schema'
import { type } from 'arktype'
import { err, ok } from 'neverthrow'
import { authedProcedure } from '#api/trpc.js'

const init = authedProcedure
  .input(type('string | undefined'))
  .mutation(async ({ input: userId, ctx: { db, user } }) => {
    try {
      const settingsId = Bun.randomUUIDv7()
      await db.transaction(async (tx) => {
        await tx.insert(userSettings).values({
          id: settingsId,
        })
        await tx.insert(userProfiles).values({
          userId: userId ?? user.id,
          settingsId,
        })
      })
      return ok()
    } catch (error) {
      return err(error)
    }
  })

const getSettings = authedProcedure.query(async ({ ctx: { db, user } }) => {
  try {
    const settings = await db.query.userSettings.findFirst({
      where: ({ id }, { eq }) => eq(id, user.id),
    })

    if (!settings) throw new Error('settings_not_found')
    return ok(settings)
  } catch (error) {
    return err(error)
  }
})

export default { init, getSettings } as const
