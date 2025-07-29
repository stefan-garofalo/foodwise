'use client'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { merge } from '@/modules/ui/utils/tailwind'

const variants = cva(
  merge(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'data-[loading]:cursor-progress data-[loading]:opacity-50 ',
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
  ),
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/80 disabled:hover:bg-primary data-[loading]:hover:bg-primary',
        danger:
          'bg-danger text-foreground shadow-sm hover:bg-danger/80 disabled:hover:bg-danger data-[loading]:hover:bg-danger',
        outline:
          'border border-border bg-background shadow-sm hover:bg-primary',
        link: 'underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        lg: 'h-10 rounded-md px-8',
        icon: 'size-9',
        full: 'h-10 w-full rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
  loading?: boolean
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ref,
  loading,
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={merge(variants({ variant, size, className }))}
      data-loading={loading ? 'true' : undefined}
      disabled={disabled}
      onClick={loading || disabled ? undefined : onClick}
      ref={ref}
      {...props}
    />
  )
}

export { Button, variants }
