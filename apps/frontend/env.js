import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {},
	client: {
		NEXT_PUBLIC_LOCAL_BACKEND_PORT: z.number().int().min(0).max(65535),
		NEXT_PUBLIC_BACKEND_URL: z.string(),
		NEXT_PUBLIC_SITE_URL: z.string()
	},
	runtimeEnv: {
		NEXT_PUBLIC_BACKEND_URL: process.env.BACKEND_URL,
		BACKEND_PORT: +process.env.BACKEND_PORT,
		NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL
	}
})
