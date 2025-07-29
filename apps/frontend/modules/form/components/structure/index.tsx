import type { PropsWithChildren } from 'react'
import { FormItem, FormLabel, FormMessage } from '@/modules/ui/primitives/form'

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
