import { router } from '#api/trpc.js'
import service from './service'
import { settingsRouter } from './settings/router'

export const usersRouter = router({
  ...service,
  settings: settingsRouter,
})
