import { router } from '#api/trpc.js'
import { settingsRouter } from './modules/settings/router'

import service from './service'

export const usersRouter = router({
  ...service,
  settings: settingsRouter,
})
