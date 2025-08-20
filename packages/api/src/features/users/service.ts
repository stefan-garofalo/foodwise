import { userProfiles, userSettings } from '@foodwise/db/schema'
import { type } from 'arktype'
import { err, ok } from 'neverthrow'
import { v7 } from 'uuid'
import { authedProcedure } from '../../trpc'
import { usersRepository } from './repository'

const init = authedProcedure
  .input(type('string | undefined'))
  .mutation(async ({ input: userId, ctx: { db, user } }) => {
    try {
      const settingsId = v7()
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

const getSettings = authedProcedure.query(async ({ ctx: { user } }) => {
  return await usersRepository.getUserSettings(user.id)
})

export default { init, getSettings } as const
