'use client'

import useDictionary from './hooks/useDictionary'
import { JSX } from 'react'

type Props = {
	value: string
	tag?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
	children?: React.ReactNode
}

export default function LocalizedString({ value, tag, children, ...props }: Props) {
	const [string] = useDictionary([value])
	const Component: React.ElementType = tag || 'span'
	return (
		<Component {...props}>
			{string}
			{children}
		</Component>
	)
}
