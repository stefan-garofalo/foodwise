import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import * as schema from './schema'

const turso = createClient({
	url: process.env.TURSO_DB_URL!,
	authToken: process.env.TURSO_AUTH_TOKEN
})

export const db = drizzle(turso, { schema })
export type LibSqlDB = typeof db
export { type SQLiteTableWithColumns } from 'drizzle-orm/sqlite-core'
