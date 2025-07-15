'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import type { SearchParams } from '../types'

export default function useQueryParams(key: string) {
  const searchParams = useSearchParams()
  const { push } = useRouter()
  const params = new URLSearchParams(searchParams.toString())

  function updateParams() {
    if (key !== 'page') params.delete('page')
    push(`?${params.toString()}`)
  }

  function setQueryParams(value: SearchParams[keyof SearchParams]) {
    if (value) params.set(key, value.toString())
    else params.delete(key)
    updateParams()
  }

  function appendQueryParams(value: SearchParams[keyof SearchParams]) {
    if (!value) return
    if (params.getAll(key).includes(value.toString()))
      params.delete(key, value.toString())
    else params.append(key, value.toString())
    updateParams()
  }

  function resetQueryParams() {
    if (key !== 'page') params.delete('page')
    params.delete(key)
    push(`?${params.toString()}`)
  }

  return { searchParams, setQueryParams, appendQueryParams, resetQueryParams }
}
