'use client'

import type { Route } from 'next'
import Link, { LinkProps } from 'next/link'
import useLocalePath from './hooks/useLocalePath'

type LocalizedLinkProps = LinkProps<string> &
	React.AnchorHTMLAttributes<HTMLAnchorElement> & {
		children: React.ReactNode
		href: Route<string>
	}

export default function LocalizedLink({
	children,
	href,
	...props
}: LocalizedLinkProps) {
	const url = useLocalePath(href)
	return (
		<Link {...props} href={url}>
			{children}
		</Link>
	)
}
