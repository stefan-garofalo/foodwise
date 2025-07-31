import type { ComponentProps, PropsWithChildren } from 'react'
import { FormItem, FormLabel, FormMessage } from '@/modules/ui/primitives/form'
import { merge } from '@/modules/ui/utils/tailwind'

export function Form({ className, ...props }: ComponentProps<'form'>) {
  return (
    <form
      className={merge('flex w-full flex-col gap-2.5', className)}
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
      {...props}
    />
  )
}

export function FormFieldItem({
  label,
  children,
  ...props
}: {
  label: string
} & PropsWithChildren &
  React.ComponentProps<typeof FormItem>) {
  return (
    <FormItem {...props}>
      {label && <FormLabel>{label}</FormLabel>}
      {children}
      <FormMessage />
    </FormItem>
  )
}
