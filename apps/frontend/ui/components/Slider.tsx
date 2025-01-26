'use client'
import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react'
import { ClassValue, merge } from '@/lib/tailwind'
import IconArrow from '../icons/Arrow'

type SliderProps = {
	children: React.ReactNode
	className?: ClassValue
	title?: string
	container?: boolean
	gap?: number
	go?: number
	snap?: boolean
}
export default function Slider({
	children,
	snap = false,
	className = '',
	container = false,
	gap = 1,
	go = 500
}: SliderProps) {
	const [enablePrev, setEnablePrev] = useState(false)
	const [enableNext, setEnableNext] = useState(true)
	const [showControls, setShowControls] = useState(false)
	const [isNavigating, setIsNavigating] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)
	const currentIndex = useRef(0)

	const detectOverflow = useCallback((node: HTMLElement | null) => {
		if (node !== null) {
			if (node.scrollWidth > node.offsetWidth) setShowControls(true)
		}
	}, [])

	useEffect(() => {
		if (!containerRef.current) return
		const slider = containerRef.current.children[0] as HTMLElement
		const controller = new AbortController()
		slider.addEventListener(
			'scroll',
			() => {
				Math.floor(slider.scrollLeft) <= 1
					? setEnablePrev(false)
					: setEnablePrev(true)
				Math.floor(slider.scrollLeft) >=
				Math.floor(slider.scrollWidth - slider.offsetWidth) - 1
					? setEnableNext(false)
					: setEnableNext(true)
			},
			{ signal: controller.signal }
		)
		return () => {
			controller.abort()
		}
	}, [])

	function navigate(direction: 'prev' | 'next') {
		const slider = containerRef!.current!.children[0]
		const scrollPosition =
			direction === 'next'
				? snap
					? slider.scrollLeft + slider.children[currentIndex.current]?.clientWidth
					: slider.scrollLeft + go
				: snap
					? slider.scrollLeft - slider.children[currentIndex.current]?.clientWidth
					: slider.scrollLeft - go
		setIsNavigating(true)
		slider.scroll({ left: scrollPosition, behavior: 'smooth' })
		setTimeout(() => {
			setIsNavigating(false)
		}, 300)
		currentIndex.current =
			direction === 'next' ? currentIndex.current + 1 : currentIndex.current - 1
	}

	return (
		<div className="group/slider relative h-full" ref={containerRef}>
			<div
				ref={detectOverflow}
				style={{ '--gap': `${gap}px` } as React.CSSProperties}
				className={` ${className} ${
					container
						? '*:first:ml-6 *:last:mr-6 lg:*:first:ml-10 lg:*:last:mr-10'
						: ''
				} ${snap ? 'snap-x snap-mandatory' : ''} slider relative flex gap-x-[var(--gap)] overflow-auto scroll-smooth`}
			>
				{children}
			</div>
			{showControls && (
				<div className="contain absolute right-0 top-0 flex items-center gap-2.5">
					<button
						className={merge(
							'pointer-events-auto',
							isNavigating ? 'disabled:opacity-50' : 'disabled:opacity-20'
						)}
						disabled={!enablePrev || isNavigating}
						onClick={() => navigate('prev')}
					>
						<IconArrow className="h-2.5 w-2.5 -rotate-180 lg:h-5 lg:w-5" />
						<span className="sr-only">Back</span>
					</button>
					<button
						className={merge(
							'pointer-events-auto',
							isNavigating ? 'disabled:opacity-50' : 'disabled:opacity-20'
						)}
						disabled={!enableNext || isNavigating}
						onClick={() => navigate('next')}
					>
						<IconArrow className="h-2.5 w-2.5 lg:h-5 lg:w-5" />
						<span className="sr-only">Forward</span>
					</button>
				</div>
			)}
		</div>
	)
}
