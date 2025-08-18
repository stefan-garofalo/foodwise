import { userSettings } from '@foodwise/db/schema'
import { createBaseProcedures } from '#api/lib/crud/index.js'
import { router } from '#api/trpc.js'
import { categoriesRouter } from './categories/router'

export const settingsRouter = router({
  categories: categoriesRouter,
  ...createBaseProcedures(userSettings),
})
