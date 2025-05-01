'use client'

import { useParams } from 'next/navigation'
import { getGlobalDictionary, getPageDictionary } from '../utils'
import { LangParams } from '../types'
import { useCleanedPath } from './path'

export function useGlobalDictionary() {
	const { lang } = useParams<LangParams>()
	return getGlobalDictionary(lang)
}

export function usePageDictionary<P extends string>() {
	const { lang } = useParams<LangParams>()
	const paths = useCleanedPath() as P
	return getPageDictionary<P>(lang, paths)
}
