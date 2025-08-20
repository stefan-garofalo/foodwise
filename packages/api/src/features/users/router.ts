import { router } from '../../trpc'
import { settingsRouter } from './modules/settings/router'

import service from './service'

export const usersRouter = router({
  ...service,
  settings: settingsRouter,
})
