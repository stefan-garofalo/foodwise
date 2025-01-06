import { err, ok } from 'neverthrow'
import { MutationParams } from './types'

export const upsertById = async ({ db, table, input }: MutationParams) => {
	try {
		const query = await db
			.insert(table)
			.values(input)
			.onConflictDoUpdate({
				target: table.id,
				set: input
			})
			.returning()

		return ok(Array.isArray(input) ? query : query[0])
	} catch (error) {
		return err(error)
	}
}
