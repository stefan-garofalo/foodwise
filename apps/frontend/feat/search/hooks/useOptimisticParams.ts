'use client'

import { useOptimistic, useTransition } from 'react'
import useQueryParams from './useQueryParams'
import { SearchParams } from '../types'

export default function useOptimisticParams<
	V extends SearchParams[keyof SearchParams] = SearchParams[keyof SearchParams]
>(key: string, initialState?: V) {
	const { searchParams, setQueryParams, appendQueryParams, resetQueryParams } =
		useQueryParams(key.toString())
	const [isPending, startTransition] = useTransition()
	const [optimisticState, addOptimistic] = useOptimistic<V | undefined>(
		(initialState ?? searchParams.getAll(key.toString())) as V
	)

	function set(updatedState: V | undefined, fn: (value: V | undefined) => void) {
		startTransition(() => {
			if (isPending) return
			addOptimistic(updatedState)
			fn(updatedState)
		})
	}

	function setOptimisticState(updatedState: V | undefined) {
		set(updatedState, setQueryParams)
	}

	function appendOptimisticState(updatedState: V | undefined) {
		set(updatedState, appendQueryParams)
	}

	function resetOptimisticState() {
		set(undefined, resetQueryParams)
	}

	return {
		optimisticState,
		setOptimisticState,
		appendOptimisticState,
		resetOptimisticState,
		isPending
	}
}
