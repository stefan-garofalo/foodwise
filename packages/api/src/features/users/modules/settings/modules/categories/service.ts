import { userSettingsCategories } from '@foodwise/db/schema'
import { getCreateSchema } from '../../../../../../lib/crud/repository/create'
import { authedProcedure } from '../../../../../../trpc'
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
