import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		NODE_ENV: z.enum(['development', 'test', 'production']),
		BACKEND_URL: z.string().url(),
		BACKEND_PORT: z.number().int().min(0).max(65535)
	},
	client: {
		NEXT_PUBLIC_SITE_URL: z.string().url()
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		BACKEND_URL: process.env.BACKEND_URL,
		BACKEND_PORT: process.env.BACKEND_PORT,
		NEXT_PUBLIC_SITE_URL: process.env.SITE_URL
	}
})
