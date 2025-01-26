'use client'

import {
	useTransform,
	useScroll,
	useSpring,
	motion,
	ForwardRefComponent,
	HTMLMotionProps
} from 'framer-motion'
import { useEffect, useRef, useState, HTMLElementType } from 'react'

type ParallaxProps = {
	children: React.ReactNode
	offset?: number
	reversed?: boolean
	tag?: HTMLElementType
}
export default function Parallax({
	children,
	offset = 50,
	reversed = false,
	tag = 'div',
	...props
}: ParallaxProps) {
	const [elementTop, setElementTop] = useState(0)
	const [clientHeight, setClientHeight] = useState(0)
	const ref = useRef<HTMLElement>(null!)

	const { scrollY } = useScroll()
	const initial = elementTop - (reversed ? -clientHeight : clientHeight)
	const final = elementTop + (reversed ? -offset : offset)

	const yRange = useTransform(
		scrollY,
		reversed ? [final, initial] : [initial, final],
		reversed ? [-offset, offset] : [offset, -offset]
	)
	const scroll = useSpring(yRange, { stiffness: 400, damping: 90 })
	const Component = motion[tag] as ForwardRefComponent<
		HTMLElement,
		HTMLMotionProps<typeof tag>
	>

	useEffect(() => {
		const element = ref.current
		const onResize = () => {
			setElementTop(element.getBoundingClientRect().top + window.scrollY)
			setClientHeight(window.innerHeight)
		}
		onResize()
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [])

	return (
		<Component ref={ref} style={{ y: scroll, x: 0 }} {...props}>
			{children}
		</Component>
	)
}
