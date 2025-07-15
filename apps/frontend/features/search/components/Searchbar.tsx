'use client'

import { useState } from 'react'
import { type ClassValue, merge } from '@/modules/ui/utils/tailwind'
import useOptimisticParams from '../hooks/use-optimistic-params'
import type { SearchParams } from '../types'

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
      data-pending={isPending ? '' : undefined}
      onSubmit={search}
    >
      {/* <IconSearch className="absolute top-1/2 left-3 size-5 -translate-y-1/2" /> */}
      <input
        className="w-full rounded-[5px] bg-transparent py-2 pr-3 pl-10 focus:outline-2 focus:outline-foreground focus:outline-offset-4 disabled:cursor-not-allowed"
        disabled={isPending}
        onChange={(e) => !isPending && setKeywords(e.target.value)}
        type="text"
        value={keywords}
      />
    </form>
  )
}
