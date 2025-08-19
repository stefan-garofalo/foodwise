import { userSettingsCategories } from '@foodwise/db/schema'
import { getCreateSchema } from '#api/lib/crud/repository/create.js'
import { authedProcedure } from '#api/trpc.js'
import { userCategoriesRepository } from './repository'

const createCategory = authedProcedure
  .input(getCreateSchema(userSettingsCategories))
  .mutation(
    async ({ input, ctx }) =>
      await userCategoriesRepository.createUserCategory({
        userId: ctx.user.id,
        input,
      })
  )

export default { createCategory } as const
