import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {},
	client: {
		NEXT_PUBLIC_BACKEND_URL: z.string(),
		NEXT_PUBLIC_FRONTEND_URL: z.string(),
		NEXT_PUBLIC_APP_NAME: z.string()
	},
	runtimeEnv: {
		NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
		NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
		NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME
	}
})
