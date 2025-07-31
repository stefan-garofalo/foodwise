'use client'

import { createFormHook, createFormHookContexts } from '@tanstack/react-form'

import { SubmitButton } from '@/modules/ui/primitives/form'

import { Input, Select } from '../components/fields'
import { Form, FormFieldItem } from '../components/structure'

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
    Form,
    FieldItem: FormFieldItem,
    SubmitButton,
  },
})
