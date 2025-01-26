import { ok, err } from 'neverthrow'

async function get(segment: string, query: URLSearchParams) {
	const res = await fetch(`${process.env.API_ENDPOINT}/${segment}?${query}`, {
		method: 'GET',
		headers: {},
		cache: 'force-cache'
	})

	const data = await res.json()
	return !res.ok ? err({}) : ok(data)
}

export async function getData(param: any) {
	return ok('true')
}
