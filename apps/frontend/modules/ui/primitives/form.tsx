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

function FormMessage({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>) {
  const { id } = use(FormItemContext)
  const { errors } = useFieldContext().state.meta

  const error = errors.length > 0 ? errors[0] : undefined
  const body = error ? String(error) : children

  if (!body) return null

  return (
    <p
      className={merge('text-destructive text-sm', className)}
      data-slot="form-message"
      id={`${id}-form-item-message`}
      {...props}
    >
      {body}
    </p>
  )
}

export { FormItem, FormLabel, FormMessage }
