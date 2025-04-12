export function accessNestedObject(
	obj: Record<PropertyKey, any>,
	pathArray: string[]
): unknown {
	let current: unknown = obj
	for (let i = 0; i < pathArray.length; i++) {
		const key = pathArray[i]

		// Check if current is an object and key exists
		if (
			current === null ||
			current === undefined ||
			typeof current !== 'object' ||
			!(key in (current as object))
		) {
			// Return undefined if path is invalid or key doesn't exist
			return undefined
		}

		// Move to the next level in the object
		current = (current as Record<PropertyKey, unknown>)[key]
	}

	return current
}
