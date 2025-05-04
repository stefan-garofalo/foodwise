import { Suspense } from 'react'
import { generate, generateMetadataParams } from '@/modules/metadata'

import type { SearchParams } from '@/features/search/types'
import SearchBar from '@/features/search/components/Searchbar'
import Results, { ResultsSkeleton } from '@/features/search/components/Results'
import Pagination, {
	PaginationSkeleton
} from '@/features/search/components/Pagination'
import Sort from '@/features/search/components/Sort'

export async function generateMetadata({ params }: generateMetadataParams) {
	const { lang } = await params

	return generate({
		title: 'Optimistic Git',
		description:
			'All the new React and Next jazz to power Github Search API. ft: PPR, Suspense, Streaming, optimistic updates and auth',
		canonical: '/',
		lang
	})
}

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
			<SearchBar q={query} className="w-full lg:w-1/2" />
			<Suspense fallback={<PaginationSkeleton />}>
				<Pagination className="lg:h-full" searchParams={sp} page={page} />
			</Suspense>
			<Sort />
			<Suspense fallback={<ResultsSkeleton />}>
				<Results searchParams={sp} />
			</Suspense>
		</main>
	)
}
