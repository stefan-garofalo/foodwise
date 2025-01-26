'use client'

import { useParams } from 'next/navigation'
import { dict } from '../utils'
import { LangParams } from '../types'

export default function useDictionary(values: string | string[]) {
	const { lang } = useParams<LangParams>()
	return typeof values === 'string'
		? dict(values, lang)
		: values.map((value) => dict(value, lang))
}
