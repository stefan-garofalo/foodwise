import { LANGS } from '@/features/i18n/config'
import { accessNestedObject } from '@/utils/objects'
import { Route } from 'next'

type Split<S extends string, D extends string = '/'> = string extends S
	? string[]
	: S extends ''
		? []
		: S extends `${infer T}${D}${infer U}`
			? [T, ...Split<U, D>]
			: [S]

type GetPathType<T, P extends string[]> = P extends [infer First, ...infer Rest]
	? First extends keyof T
		? // @ts-ignore - Allows indexing with string subtype
			Rest extends string[]
			? GetPathType<T[First], Rest>
			: never
		: undefined // Key not found at this level
	: T // End of path

export function path(url: string, lang: keyof typeof LANGS) {
	return `/${lang}${url}` as Route<string>
}
export function getGlobalDictionary(lang: keyof typeof LANGS) {
	return LANGS[lang]
}

export function getPageDictionary<P extends string>(
	lang: keyof typeof LANGS,
	path: P
) {
	const dict = getGlobalDictionary(lang)
	const paths = path.split('/')
	return accessNestedObject(dict, paths) as GetPathType<
		(typeof LANGS)[keyof typeof LANGS],
		Split<P>
	>
}
