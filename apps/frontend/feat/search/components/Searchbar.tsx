'use client'

import { useState } from 'react'
import useOptimisticParams from '../hooks/useOptimisticParams'
import { SearchParams } from '../types'

import { merge, ClassValue } from '@/lib/tailwind'
import IconSearch from '@/ui/icons/Search'

type SearchBarProps = {
	q: SearchParams[keyof SearchParams]
	className?: ClassValue
}
export default function SearchBar({ q, className }: SearchBarProps) {
	const [keywords, setKeywords] = useState(q)
	const { setOptimisticState, isPending } = useOptimisticParams('q', keywords)

	function search(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setOptimisticState(keywords)
	}

	return (
		<form
			className={merge(
				'relative flex items-center rounded-md border border-border bg-background transition-colors duration-300 [&:hover:not(:has(input:focus))]:border-border-active',
				'data-pending:animate-pulse data-pending:cursor-not-allowed',
				className
			)}
			onSubmit={search}
			data-pending={isPending ? '' : undefined}
		>
			<IconSearch className="absolute left-3 top-1/2 size-5 -translate-y-1/2" />
			<input
				disabled={isPending}
				type="text"
				className="w-full rounded-[5px] bg-transparent py-2 pl-10 pr-3 focus:outline-2 focus:outline-offset-4 focus:outline-foreground disabled:cursor-not-allowed"
				value={keywords}
				onChange={(e) => !isPending && setKeywords(e.target.value)}
			/>
		</form>
	)
}
