// import { PrimaryButtonLink } from '@/modules/ui/primitives/ButtonLink'
// import IconArrow from '@/modules/ui/icons/Arrow'

export default function SkeletonPagination() {
	return (
		<div className="flex h-full shrink-0 items-center gap-x-3">
			<div className="flex h-full w-28 flex-col justify-center gap-y-2 opacity-50 lg:items-end">
				<span className="bg-foreground h-1 w-1/2 animate-pulse rounded-sm lg:h-1.5"></span>
				<span className="bg-foreground h-1 w-full animate-pulse rounded-sm lg:h-1.5"></span>
			</div>
			<div className="flex h-full items-center gap-x-2">
				{/* <PrimaryButtonLink className="pointer-events-none animate-pulse">
					<IconArrow className="size-5 rotate-180" />
					<span className="sr-only">Prev</span>
				</PrimaryButtonLink>
				<PrimaryButtonLink className="pointer-events-none animate-pulse">
					<IconArrow className="size-5" />
					<span className="sr-only">Next</span>
				</PrimaryButtonLink> */}
			</div>
		</div>
	)
}
