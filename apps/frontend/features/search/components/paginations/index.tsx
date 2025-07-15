// import { getData } from '@/lib/api'

import type { SearchParams } from '@/features/search/types'
import { type ClassValue, merge } from '@/modules/ui/utils/tailwind'

export { default as SkeletonPagination } from '../skeletons/pagination'

type PaginationProps = {
  className?: ClassValue
  searchParams: SearchParams
  page: number
}

export default function Pagination({ className }: PaginationProps) {
  // const data = await getData(searchParams)
  // if (data.isErr()) return null

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
