import { userProfiles, userSettings } from '@foodwise/db/schema'
import { type } from 'arktype'
import { err, ok } from 'neverthrow'
import { authedProcedure } from '#api/trpc.js'

export const init = authedProcedure
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
