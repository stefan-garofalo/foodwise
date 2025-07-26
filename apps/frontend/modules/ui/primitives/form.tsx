/** biome-ignore-all lint/performance/noNamespaceImport: shadcn */

'use client'

import { createContext, use, useId } from 'react'

import { useFieldContext } from '@/modules/form/hooks'
import { merge } from '../utils/tailwind'
import Label from './label'

type FormItemContextValue = {
  id: string
}

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
  const id = useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        className={merge('grid gap-2', className)}
        data-slot="form-item"
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  const field = useFieldContext()
  const item = use(FormItemContext)

  return (
    <Label
      className={merge('data-[error=true]:text-destructive', className)}
      data-error={!!field.state.meta.errors.length}
      data-slot="form-label"
      htmlFor={`${item.id}-form-item`}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
  const item = use(FormItemContext)

  return (
    <p
      className={merge('text-muted-foreground text-sm', className)}
      data-slot="form-description"
      id={`${item.id}-form-item-description`}
      {...props}
    />
  )
}

function FormMessage({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>) {
  const field = useFieldContext()
  const item = use(FormItemContext)

  const error =
    field.state.meta.errors.length > 0 ? field.state.meta.errors[0] : undefined
  const body = error ? String(error) : children

  if (!body) return null

  return (
    <p
      className={merge('text-destructive text-sm', className)}
      data-slot="form-message"
      id={`${item.id}-form-item-message`}
      {...props}
    >
      {body}
    </p>
  )
}

export { FormItem, FormLabel, FormDescription, FormMessage }
