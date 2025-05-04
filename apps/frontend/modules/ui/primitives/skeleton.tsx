import { merge } from '@/modules/ui/utils/tailwind'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={merge('bg-primary/10 animate-pulse rounded-md', className)}
			{...props}
		/>
	)
}

export { Skeleton }
