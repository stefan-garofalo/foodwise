import { getData } from '@/lib/api'
import { merge, ClassValue } from '@/lib/tailwind'

import { SearchParams } from '@/feat/search/types'
import { LIMIT } from '@/feat/search/config'

import Controls from './Controls'
import SkeletonPagination from '../Skeletons/Pagination'

type PaginationProps = {
	className?: ClassValue
	searchParams: SearchParams
	page: number
}

export default async function Pagination({
	searchParams,
	page,
	className
}: PaginationProps) {
	const data = await getData(searchParams)
	if (data.isErr()) return null

	// const { total_count: total, items } = data.value
	// const currentCount = items.length >= 11 ? LIMIT * page : items.length

	return (
		<div
			className={merge(
				'flex shrink-0 flex-row-reverse items-center gap-x-3 lg:flex-row',
				className
			)}
		>
			{/* <Controls currentCount={currentCount} totalCount={total} currentPage={page} /> */}
		</div>
	)
}

export { SkeletonPagination as PaginationSkeleton }
