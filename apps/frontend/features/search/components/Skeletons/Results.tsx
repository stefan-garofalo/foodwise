export default function SkeletonResults() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-4 gap-2">
			{Array.from({ length: 12 }).map((_, i) => (
				<div
					key={i}
					className="bg-background border border-border rounded-md px-3 py-3 size-full"
				>
					<div className="opacity-50">
						<div className="h-3 bg-foreground rounded-sm animate-pulse w-1/4 "></div>
						<div className="h-2 bg-foreground rounded-sm animate-pulse mt-2 w-1/3"></div>
						<div className="h-2 bg-foreground rounded-sm animate-pulse mt-5 w-full"></div>
						<div className="h-2 bg-foreground rounded-sm animate-pulse mt-1.5 w-full"></div>
						<div className="h-2 bg-foreground rounded-sm animate-pulse mt-1.5 w-3/4"></div>
					</div>
				</div>
			))}
		</div>
	)
}
