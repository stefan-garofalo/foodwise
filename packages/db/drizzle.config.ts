import type { Config } from 'drizzle-kit'

export default {
  schema: './src/schema',
  out: './migrations',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DB_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
  tablesFilter: ['user'],
} satisfies Config
