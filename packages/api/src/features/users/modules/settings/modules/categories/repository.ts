import { userSettingsCategories } from '@foodwise/db/schema'

import { usersRepository } from '#api/features/users/repository.js'
import {
  type CreateMutationData,
  getCreateMutation,
} from '#api/lib/crud/repository/create.js'

type CreateUserCategoryParams = {
  userId: string
  input: Omit<CreateMutationData, 'settingsId'>
}
async function createUserCategory({ userId, input }: CreateUserCategoryParams) {
  const settings = await usersRepository.getUserSettings(userId)
  if (settings.isErr()) return settings

  return await getCreateMutation(userSettingsCategories, {
    settingsId: settings.value.id,
    ...input,
  } as CreateMutationData<typeof userSettingsCategories>)
}

export const userCategoriesRepository = { createUserCategory } as const
