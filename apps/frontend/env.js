import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		BACKEND_URL: z.string(),
		BACKEND_PORT: z.number().int().min(0).max(65535)
	},
	client: {
		NEXT_PUBLIC_SITE_URL: z.string()
	},
	runtimeEnv: {
		BACKEND_URL: process.env.BACKEND_URL,
		BACKEND_PORT: +process.env.BACKEND_PORT,
		NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL
	}
})
