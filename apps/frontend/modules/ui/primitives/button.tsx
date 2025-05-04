import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { merge } from '@/modules/ui/utils/tailwind'

const variants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground shadow hover:bg-primary/80',
				danger: 'bg-danger text-foreground shadow-sm hover:bg-danger/80',
				outline: 'border border-border bg-background shadow-sm hover:bg-primary',
				link: 'underline-offset-4 hover:underline'
			},
			size: {
				default: 'h-9 px-4 py-2',
				lg: 'h-10 rounded-md px-8',
				icon: 'size-9',
				full: 'h-10 rounded-md w-full'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof variants> {
	asChild?: boolean
	ref?: React.Ref<HTMLButtonElement>
	loading?: boolean
}

function Button({
	className,
	variant,
	size,
	asChild = false,
	ref,
	loading,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : 'button'
	return (
		<Comp
			className={merge(variants({ variant, size, className }))}
			ref={ref}
			disabled={loading}
			{...props}
		/>
	)
}

export { Button, variants }
