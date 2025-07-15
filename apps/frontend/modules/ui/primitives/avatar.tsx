/** biome-ignore-all lint/performance/noNamespaceImport: shadcn */

'use client'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import type * as React from 'react'
import { merge } from '../utils/tailwind'

const Avatar = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
  ref?: React.RefObject<React.ComponentRef<typeof AvatarPrimitive.Root>>
}) => (
  <AvatarPrimitive.Root
    className={merge(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    ref={ref}
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
    className={merge('aspect-square h-full w-full', className)}
    ref={ref}
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
    className={merge(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    ref={ref}
    {...props}
  />
)
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
