'use client'

import { useState, use, createContext, Dispatch, SetStateAction } from 'react'
import { merge, ClassValue } from '@/lib/tailwind'

type TAccordioGroupContext = {
	openIndex: number | null
	setOpenIndex: Dispatch<SetStateAction<number | null>>
}
const AccordionGroupContext = createContext<TAccordioGroupContext>({
	openIndex: null,
	setOpenIndex: () => {}
})

const AccordionItemContext = createContext<{
	currentIndex: TAccordioGroupContext['openIndex']
}>({
	currentIndex: null
})

type AccordionGroupProps = {
	children: React.ReactNode
	className?: ClassValue
	ref?: React.RefObject<HTMLUListElement | null>
}
export function AccordionGroup({ children, className, ref }: AccordionGroupProps) {
	const [openIndex, setOpenIndex] =
		useState<TAccordioGroupContext['openIndex']>(null)

	return (
		<AccordionGroupContext.Provider value={{ openIndex, setOpenIndex }}>
			<ul {...(ref ? { ref } : {})} className={merge('flex flex-col', className)}>
				{children}
			</ul>
		</AccordionGroupContext.Provider>
	)
}

type AccordionItemProps = {
	children: React.ReactNode
	index: number
	ref?: React.RefObject<HTMLLIElement | null>
}
export function AccordionItem({ children, index, ref }: AccordionItemProps) {
	return (
		<AccordionItemContext.Provider value={{ currentIndex: index }}>
			<li {...(ref ? { ref } : {})}>{children}</li>
		</AccordionItemContext.Provider>
	)
}

type AccordionTriggerProps = {
	children: React.ReactNode
	className?: ClassValue
	ref?: React.RefObject<HTMLButtonElement | null>
}
export function AccordionTrigger({
	children,
	ref,
	className
}: AccordionTriggerProps) {
	const { setOpenIndex } = use(AccordionGroupContext)
	const { currentIndex } = use(AccordionItemContext)
	return (
		<button
			{...(ref ? { ref } : {})}
			className={merge(className)}
			onClick={() =>
				setOpenIndex((prev) => (prev === currentIndex ? null : currentIndex))
			}
		>
			{children}
		</button>
	)
}

type AccordionContentProps = {
	children: React.ReactNode
	containerClassName?: ClassValue
	innerClassName?: ClassValue
	ref?: React.RefObject<HTMLDivElement | null>
}
export function AccordionContent({
	children,
	containerClassName,
	innerClassName,
	ref
}: AccordionContentProps) {
	const { openIndex } = use(AccordionGroupContext)
	const { currentIndex } = use(AccordionItemContext)
	return (
		<div
			{...(ref ? { ref } : {})}
			data-open={openIndex === currentIndex ? '' : undefined}
			className={merge(
				'grid w-full grid-rows-[0fr] transition-all duration-[850ms] data-open:grid-rows-[1fr]',
				containerClassName
			)}
		>
			<div
				className={merge(
					'overflow-hidden transition-all',
					openIndex !== currentIndex && 'invisible delay-500',
					innerClassName
				)}
			>
				{children}
			</div>
		</div>
	)
}
