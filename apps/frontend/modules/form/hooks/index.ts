'use client'

import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { Button } from '@/modules/ui/primitives/button'
import { Input } from '@/modules/ui/primitives/input'
import { Select } from '../components/fields'

const { fieldContext, formContext } = createFormHookContexts()
export const { useAppForm } = createFormHook({
  fieldContext,
  fieldComponents: {
    Input,
    Select,
  },
  formContext,
  formComponents: {
    Button,
  },
})
