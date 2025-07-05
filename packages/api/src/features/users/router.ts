import { router } from '#api/trpc.js'
import { settingsRouter } from './settings/router'

export const usersRouter = router({
	settings: settingsRouter
})
