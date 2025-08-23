import { LibsqlDialect } from '@libsql/kysely-libsql'
import { type BetterAuthOptions, betterAuth } from 'better-auth'
import { getSessionCookie as getSessionCookieRaw } from 'better-auth/cookies'
import { COOKIE_PREFIX } from './config'

export type { Session } from 'better-auth'

const dialect = new LibsqlDialect({
  url: process.env.TURSO_DB_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
})

export const getAuth = (
  opt?: BetterAuthOptions
): ReturnType<typeof betterAuth> =>
  betterAuth({
    database: {
      dialect,
      type: 'sqlite',
    },
    advanced: {
      cookiePrefix: COOKIE_PREFIX,
      crossSubDomainCookies: {
        enabled: true,
        domain:
          process.env.ENVIRONMENT! === 'local'
            ? 'localhost'
            : `.${process.env
                .NEXT_PUBLIC_BACKEND_URL!.replace('https://', '')
                .split('.')
                .slice(-3)
                .join('.')}`,
      },
      defaultCookieAttributes: {
        secure: true,
        httpOnly: true,
        sameSite: 'none',
      },
      useSecureCookies: true,
    },
    trustedOrigins: [
      process.env.NEXT_PUBLIC_BACKEND_URL!,
      process.env.NEXT_PUBLIC_FRONTEND_URL!,
    ],
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      },
    },
    ...opt,
  })

export const getSessionCookie = (request: Request) =>
  getSessionCookieRaw(request, { cookiePrefix: COOKIE_PREFIX })
