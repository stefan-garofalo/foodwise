import { PrimaryButtonLink } from '@/ui/components/ButtonLink'
import IconArrow from '@/ui/icons/Arrow'

export default function SkeletonPagination() {
	return (
		<div className="shrink-0 h-full flex items-center gap-x-3">
			<div className="h-full flex flex-col lg:items-end justify-center gap-y-2 w-28 opacity-50">
				<span className="bg-foreground rounded-sm h-1 lg:h-1.5 animate-pulse w-1/2"></span>
				<span className="bg-foreground rounded-sm h-1 lg:h-1.5 animate-pulse w-full"></span>
			</div>
			<div className="h-full flex items-center gap-x-2">
				<PrimaryButtonLink className="pointer-events-none animate-pulse">
					<IconArrow className="size-5 rotate-180" />
					<span className="sr-only">Prev</span>
				</PrimaryButtonLink>
				<PrimaryButtonLink className="pointer-events-none animate-pulse">
					<IconArrow className="size-5" />
					<span className="sr-only">Next</span>
				</PrimaryButtonLink>
			</div>
		</div>
	)
}
