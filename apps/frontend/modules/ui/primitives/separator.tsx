/** biome-ignore-all lint/performance/noNamespaceImport: shadcn */
'use client'

import * as SeparatorPrimitive from '@radix-ui/react-separator'
import type * as React from 'react'

import { merge } from '@/modules/ui/utils/tailwind'

const Separator = ({
  ref,
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
  ref?: React.RefObject<React.ElementRef<typeof SeparatorPrimitive.Root>>
}) => (
  <SeparatorPrimitive.Root
    className={merge(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className
    )}
    decorative={decorative}
    orientation={orientation}
    ref={ref}
    {...props}
  />
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
