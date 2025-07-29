'use client'

import { useParams } from 'next/navigation'
import { getGlobalDictionary, getPageDictionary } from '../getters'
import type { LangParams } from '../types'
import { useCleanedPath } from './path'

export function useGlobalDictionary() {
  const { lang } = useParams<LangParams>()
  return getGlobalDictionary(lang)
}

export const useCommonDictionary = () => useGlobalDictionary().common

export function usePageDictionary<P extends string>() {
  const { lang } = useParams<LangParams>()
  const paths = useCleanedPath()
  return getPageDictionary<P>(
    lang,
    paths.split('/').filter(Boolean).join('.') as P
  )
}
