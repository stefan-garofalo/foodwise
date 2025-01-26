'use client'

import { useRef } from 'react'
import {
	motion,
	useScroll,
	useInView,
	useTransform,
	useSpring,
	useVelocity,
	useMotionValue,
	useAnimationFrame
} from 'framer-motion'
import { ClassValue, merge } from '@/lib/tailwind'

type ScrollRotateProps = {
	children: React.ReactNode
	className?: ClassValue
	baseVelocity?: number
}
export default function ScrollRotate({
	children,
	className,
	baseVelocity = 30
}: ScrollRotateProps) {
	const ring = useRef<HTMLDivElement>(null!)
	const isInView = useInView(ring)

	const baseRotate = useMotionValue(0)
	const { scrollY } = useScroll()
	const scrollVelocity = useVelocity(scrollY)
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400
	})
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false
	})

	const directionFactor = useRef(1)
	useAnimationFrame((t, delta) => {
		let rotateBy = directionFactor.current * baseVelocity * (delta / 1000)

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1
		}

		rotateBy += directionFactor.current * rotateBy * velocityFactor.get()

		baseRotate.set(baseRotate.get() + rotateBy)
	})

	return (
		<motion.div
			ref={ring}
			style={{ rotate: isInView ? baseRotate : 0 }}
			className={merge(className, 'aspect-square origin-center')}
		>
			{children}
		</motion.div>
	)
}
