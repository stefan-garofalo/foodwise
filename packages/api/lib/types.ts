import { LibSqlDB, SQLiteTableWithColumns } from '@repo/db'

export type MutationParams = {
	db: LibSqlDB
	table: SQLiteTableWithColumns<any>
	input: SQLiteTableWithColumns<any>['_']['columns']
}
