export default function SkeletonResults() {
	return (
		<div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:grid-rows-4">
			{Array.from({ length: 12 }).map((_, i) => (
				<div
					key={i}
					className="bg-background border-border size-full rounded-md border px-3 py-3"
				>
					<div className="opacity-50">
						<div className="bg-foreground h-3 w-1/4 animate-pulse rounded-sm"></div>
						<div className="bg-foreground mt-2 h-2 w-1/3 animate-pulse rounded-sm"></div>
						<div className="bg-foreground mt-5 h-2 w-full animate-pulse rounded-sm"></div>
						<div className="bg-foreground mt-1.5 h-2 w-full animate-pulse rounded-sm"></div>
						<div className="bg-foreground mt-1.5 h-2 w-3/4 animate-pulse rounded-sm"></div>
					</div>
				</div>
			))}
		</div>
	)
}
