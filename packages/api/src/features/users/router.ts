import { router } from '@/trpc'
import { settingsRouter } from './settings/router'

export const usersRouter = router({
	settings: settingsRouter
})
