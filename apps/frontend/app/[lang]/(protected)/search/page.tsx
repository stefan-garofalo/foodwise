import { Suspense } from 'react'
import Pagination, {
  PaginationSkeleton,
} from '@/features/search/components/paginations'
import Results, { ResultsSkeleton } from '@/features/search/components/results'
import SearchBar from '@/features/search/components/searchbar'
import Sort from '@/features/search/components/sort'
import type { SearchParams } from '@/features/search/types'

type HomePageProps = {
  searchParams: Promise<SearchParams>
}
export default async function SearchPage({ searchParams }: HomePageProps) {
  const sp = await searchParams
  let { q: query, page } = sp
  query = query || 'git'
  page = +(page || 1)

  return (
    <main className="group/query p-container">
      <SearchBar className="w-full lg:w-1/2" q={query} />
      <Suspense fallback={<PaginationSkeleton />}>
        <Pagination className="lg:h-full" page={page} searchParams={sp} />
      </Suspense>
      <Sort />
      <Suspense fallback={<ResultsSkeleton />}>
        <Results searchParams={sp} />
      </Suspense>
    </main>
  )
}
