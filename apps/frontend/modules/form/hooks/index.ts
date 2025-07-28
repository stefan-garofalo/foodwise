'use client'

import { createFormHook, createFormHookContexts } from '@tanstack/react-form'

import { Button } from '@/modules/ui/primitives/button'
import { FormItem, FormLabel, FormMessage } from '@/modules/ui/primitives/form'
import { Input } from '@/modules/ui/primitives/input'
import { Select } from '../components/fields'

// Create TanStack Form contexts
export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts()

// Main form hook with enhanced capabilities
export const { useAppForm } = createFormHook({
  fieldContext,
  fieldComponents: {
    Input,
    Select,
  },
  formContext,
  formComponents: {
    Item: FormItem,
    Label: FormLabel,
    Message: FormMessage,
    Button,
  },
})
