'use client'

import { useParams } from 'next/navigation'
import { path } from '../utils'
import { LangParams } from '../types'

export default function useLocalePath(value: string) {
	const { lang } = useParams<LangParams>()
	return path(value, lang)
}
