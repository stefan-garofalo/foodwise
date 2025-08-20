'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { merge } from '@/modules/ui/utils/tailwind'
// import IconChevronDown from '../icons/Chevron'
// import IconCheck from '../icons/Check'

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

const SelectTrigger = ({
	ref,
	className,
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
	ref?: React.RefObject<React.ElementRef<typeof SelectPrimitive.Trigger>>
}) => (
	<SelectPrimitive.Trigger
		ref={ref}
		className={merge(
			'border-border bg-background ring-offset-background placeholder:text-foreground focus:ring-foreground flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
			className
		)}
		{...props}
	>
		{children}
		<SelectPrimitive.Icon asChild>
			{/* <IconChevronDown className="h-4 w-4 opacity-50" /> */}
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
)
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollDownButton = ({
	ref,
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> & {
	ref?: React.RefObject<React.ElementRef<typeof SelectPrimitive.ScrollDownButton>>
}) => (
	<SelectPrimitive.ScrollDownButton
		ref={ref}
		className={merge(
			'flex cursor-default items-center justify-center py-1',
			className
		)}
		{...props}
	>
		{/* <IconChevronDown className="h-4 w-4" /> */}
	</SelectPrimitive.ScrollDownButton>
)
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = ({
	ref,
	className,
	children,
	position = 'popper',
	...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
	ref?: React.RefObject<React.ElementRef<typeof SelectPrimitive.Content>>
}) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			ref={ref}
			className={merge(
				'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-background text-foreground relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md',
				position === 'popper' &&
					'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
				className
			)}
			position={position}
			{...props}
		>
			<SelectPrimitive.Viewport
				className={merge(
					'p-1',
					position === 'popper' &&
						'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
				)}
			>
				{children}
			</SelectPrimitive.Viewport>
			<SelectScrollDownButton />
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
)
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = ({
	ref,
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & {
	ref?: React.RefObject<React.ElementRef<typeof SelectPrimitive.Label>>
}) => (
	<SelectPrimitive.Label
		ref={ref}
		className={merge('py-1.5 pr-2 pl-8 text-sm font-semibold', className)}
		{...props}
	/>
)
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = ({
	ref,
	className,
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
	ref?: React.RefObject<React.ElementRef<typeof SelectPrimitive.Item>>
}) => (
	<SelectPrimitive.Item
		ref={ref}
		className={merge(
			'focus:text-foreground relative flex w-full cursor-default items-center rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50',
			className
		)}
		{...props}
	>
		<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
			<SelectPrimitive.ItemIndicator>
				{/* <IconCheck className="h-4 w-4" /> */}
			</SelectPrimitive.ItemIndicator>
		</span>
		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
)
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = ({
	ref,
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> & {
	ref?: React.RefObject<React.ElementRef<typeof SelectPrimitive.Separator>>
}) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={merge('bg-background-secondary -mx-1 my-1 h-px', className)}
		{...props}
	/>
)
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectLabel,
	SelectItem,
	SelectSeparator,
	SelectScrollDownButton
}
