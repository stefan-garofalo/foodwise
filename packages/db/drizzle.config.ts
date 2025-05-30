import type { Config } from 'drizzle-kit'

export default {
	schema: './schema',
	out: './migrations',
	dialect: 'turso',
	dbCredentials: {
		url: process.env.TURSO_DB_URL!,
		authToken: process.env.TURSO_AUTH_TOKEN
	}
} satisfies Config
