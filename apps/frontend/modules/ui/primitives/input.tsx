import type * as React from 'react'

import { merge } from '@/modules/ui/utils/tailwind'
import Label from './label'

const Input = ({
  ref,
  className,
  type,
  label,
  ...props
}: React.ComponentProps<'input'> & {
  ref?: React.RefObject<HTMLInputElement>
  label?: string
}) => {
  return (
    <div>
      {label && (
        <Label className="pb-2.5" htmlFor={props.name}>
          {label}
        </Label>
      )}
      <input
        className={merge(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-foreground/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        type={type}
        {...props}
      />
    </div>
  )
}
Input.displayName = 'Input'

export { Input }
