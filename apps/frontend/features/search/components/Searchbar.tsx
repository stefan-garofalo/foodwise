'use client'

import { useState } from 'react'
import useOptimisticParams from '../hooks/useOptimisticParams'
import { SearchParams } from '../types'

import { merge, ClassValue } from '@/modules/ui/utils/tailwind'

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
				'border-border bg-background [&:hover:not(:has(input:focus))]:border-border-active relative flex items-center rounded-md border transition-colors duration-300',
				'data-pending:animate-pulse data-pending:cursor-not-allowed',
				className
			)}
			onSubmit={search}
			data-pending={isPending ? '' : undefined}
		>
			{/* <IconSearch className="absolute top-1/2 left-3 size-5 -translate-y-1/2" /> */}
			<input
				disabled={isPending}
				type="text"
				className="focus:outline-foreground w-full rounded-[5px] bg-transparent py-2 pr-3 pl-10 focus:outline-2 focus:outline-offset-4 disabled:cursor-not-allowed"
				value={keywords}
				onChange={(e) => !isPending && setKeywords(e.target.value)}
			/>
		</form>
	)
}
