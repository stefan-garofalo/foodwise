import { router } from '#api/trpc.js'
import { init } from './service'
import { settingsRouter } from './settings/router'

export const usersRouter = router({
  init,
  settings: settingsRouter,
})
