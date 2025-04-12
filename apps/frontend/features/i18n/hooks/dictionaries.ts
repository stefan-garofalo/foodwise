'use client'

import { useParams } from 'next/navigation'
import { getGlobalDictionary, getPageDictionary } from '../utils'
import { LangParams } from '../types'
import { useCleanedPath } from './path'

export function useGlobalDictionary() {
	const { lang } = useParams<LangParams>()
	return getGlobalDictionary(lang)
}

export function usePageDictionary() {
	const { lang } = useParams<LangParams>()
	const paths = useCleanedPath()
	return getPageDictionary(lang, paths)
}
