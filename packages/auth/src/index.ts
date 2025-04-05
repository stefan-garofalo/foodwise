import { betterAuth, Session } from 'better-auth'
import { LibsqlDialect } from '@libsql/kysely-libsql'

const dialect = new LibsqlDialect({
	url: process.env.TURSO_DB_URL!,
	authToken: process.env.TURSO_AUTH_TOKEN!
})

export const auth = betterAuth({
	database: {
		dialect,
		type: 'sqlite'
	},
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!
		}
	}
})

export type { Session }