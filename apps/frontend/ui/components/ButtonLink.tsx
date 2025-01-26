import { merge, ClassValue } from '@/lib/tailwind'

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	href: string
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	href?: never
}

type ButtonLinkProps = {
	className?: ClassValue
	children: React.ReactNode
} & (AnchorProps | ButtonProps)

function ButtonLink({ className, children, ...props }: ButtonLinkProps) {
	const defaultClassName = merge(
		'text-sm p-2.5 rounded-md transition-all duration-300',
		'disabled:opacity-40 disabled:cursor-not-allowed data-disabled:opacity-40 data-disabled:cursor-not-allowed',
		'data-pending:animate-pulse',
		className
	)
	return 'href' in props ? (
		<a className={defaultClassName} {...(props as AnchorProps)}>
			{children}
		</a>
	) : (
		<button className={defaultClassName} {...(props as ButtonProps)}>
			{children}
		</button>
	)
}

export function PrimaryButtonLink({
	children,
	className,
	...props
}: ButtonLinkProps) {
	return (
		<ButtonLink
			{...props}
			className={merge(
				'border border-border bg-background hover:border-border-active',
				className
			)}
		>
			{children}
		</ButtonLink>
	)
}

export function SecondaryButtonLink({
	children,
	className,
	...props
}: ButtonLinkProps) {
	return (
		<ButtonLink
			{...props}
			className={merge(
				'border border-foreground bg-foreground text-background hover:opacity-60',
				className
			)}
		>
			{children}
		</ButtonLink>
	)
}
