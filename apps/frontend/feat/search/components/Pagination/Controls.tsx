'use client'

import useOptimisticParams from '@/feat/search/hooks/useOptimisticParams'
import { LIMIT } from '@/feat/search/config'
import { PrimaryButtonLink } from '@/ui/components/ButtonLink'
import IconArrow from '@/ui/icons/Arrow'

export default function Controls({
	currentPage,
	currentCount,
	totalCount
}: {
	currentCount: number
	currentPage: number
	totalCount: number
}) {
	const { optimisticState, setOptimisticState, isPending } = useOptimisticParams(
		'page',
		currentPage
	)
	return (
		<>
			<div className="flex flex-col text-sm lg:items-end lg:gap-y-0.5 lg:text-base lg:*:leading-none">
				<span>Page: {optimisticState}</span>
				<span>
					{currentCount} of {totalCount?.toLocaleString('en-US')}
				</span>
			</div>
			<div className="flex items-center gap-x-2">
				<PrimaryButtonLink
					onClick={() => setOptimisticState(currentPage - 1)}
					disabled={isPending || currentPage === 1}
					data-pending={isPending ? '' : undefined}
				>
					<IconArrow className="size-5 rotate-180" />
					<span className="sr-only">Prev</span>
				</PrimaryButtonLink>
				<PrimaryButtonLink
					onClick={() => setOptimisticState(currentPage + 1)}
					disabled={isPending || currentPage * LIMIT >= totalCount}
					data-pending={isPending ? '' : undefined}
				>
					<IconArrow className="size-5" />
					<span className="sr-only">Next</span>
				</PrimaryButtonLink>
			</div>
		</>
	)
}
