/** biome-ignore-all lint/performance/noNamespaceImport: shadcn */

'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import type * as React from 'react'
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
    className={merge(
      'flex h-10 w-full items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-foreground focus:outline-hidden focus:ring-2 focus:ring-foreground focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      className
    )}
    ref={ref}
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
  ref?: React.RefObject<
    React.ElementRef<typeof SelectPrimitive.ScrollDownButton>
  >
}) => (
  <SelectPrimitive.ScrollDownButton
    className={merge(
      'flex cursor-default items-center justify-center py-1',
      className
    )}
    ref={ref}
    {...props}
  >
    {/* <IconChevronDown className="h-4 w-4" /> */}
  </SelectPrimitive.ScrollDownButton>
)
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

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
      className={merge(
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-background text-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in',
        position === 'popper' &&
          'data-[side=left]:-translate-x-1 data-[side=top]:-translate-y-1 data-[side=right]:translate-x-1 data-[side=bottom]:translate-y-1',
        className
      )}
      position={position}
      ref={ref}
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
    className={merge('py-1.5 pr-2 pl-8 font-semibold text-sm', className)}
    ref={ref}
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
    className={merge(
      'relative flex w-full cursor-default select-none items-center rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50',
      className
    )}
    ref={ref}
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
    className={merge('-mx-1 my-1 h-px bg-background-secondary', className)}
    ref={ref}
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
  SelectScrollDownButton,
}
