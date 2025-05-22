'use client'

import { useParams } from 'next/navigation'
import { LangParams } from '../types'
import { useCleanedPath } from './path'
import { getGlobalDictionary, getPageDictionary } from '../getters'

export function useGlobalDictionary() {
	const { lang } = useParams<LangParams>()
	return getGlobalDictionary(lang)
}

export function usePageDictionary<P extends string>() {
	const { lang } = useParams<LangParams>()
	const paths = useCleanedPath()
	return getPageDictionary<P>(lang, paths.split('/').filter(Boolean).join('.') as P)
}
