'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { merge } from '../utils/tailwind'

const Avatar = ({
	ref,
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
	ref?: React.RefObject<React.ComponentRef<typeof AvatarPrimitive.Root>>
}) => (
	<AvatarPrimitive.Root
		ref={ref}
		className={merge(
			'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
			className
		)}
		{...props}
	/>
)
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = ({
	ref,
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & {
	ref?: React.RefObject<React.ComponentRef<typeof AvatarPrimitive.Image>>
}) => (
	<AvatarPrimitive.Image
		ref={ref}
		className={merge('aspect-square h-full w-full', className)}
		{...props}
	/>
)
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = ({
	ref,
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & {
	ref?: React.RefObject<React.ComponentRef<typeof AvatarPrimitive.Fallback>>
}) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={merge(
			'bg-muted flex h-full w-full items-center justify-center rounded-full',
			className
		)}
		{...props}
	/>
)
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
