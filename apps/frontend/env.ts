import { createEnv } from '@t3-oss/env-nextjs'
import { type } from 'arktype'

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_BACKEND_URL: type('string'),
    NEXT_PUBLIC_FRONTEND_URL: type('string'),
    NEXT_PUBLIC_APP_NAME: type('string'),
  },
  runtimeEnv: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  },
})
