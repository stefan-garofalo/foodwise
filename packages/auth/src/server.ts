import { betterAuth, type BetterAuthOptions } from 'better-auth'
import { LibsqlDialect } from '@libsql/kysely-libsql'

export type { Session } from 'better-auth'

const dialect = new LibsqlDialect({
	url: process.env.TURSO_DB_URL!,
	authToken: process.env.TURSO_AUTH_TOKEN!
})

export const getAuth = (opt?: BetterAuthOptions) =>
	betterAuth({
		database: {
			dialect,
			type: 'sqlite'
		},
		advanced: {
			cookies: {
				defaultCookieAttributes: {
					attributes: {
						sameSite: 'none',
						secure: true
					}
				}
			},
			useSecureCookies: true
		},
		trustedOrigins: [
			process.env.NEXT_PUBLIC_BACKEND_URL!,
			process.env.NEXT_PUBLIC_FRONTEND_URL!
		],
		socialProviders: {
			google: {
				clientId: process.env.GOOGLE_CLIENT_ID!,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET!
			}
		}
		// ...opt
	})
