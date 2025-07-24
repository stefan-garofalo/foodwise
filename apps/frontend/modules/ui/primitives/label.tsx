'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import type { ComponentProps } from 'react'
import { merge } from '../utils/tailwind'

export default function Label({
  className,
  ...props
}: ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      className={merge(
        'flex select-none items-center gap-2 font-medium text-sm leading-none opacity-80 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
        className
      )}
      data-slot="label"
      {...props}
    />
  )
}
