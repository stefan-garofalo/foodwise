'use client'

import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { Button } from '../../ui/primitives/button'
import { Input } from '../../ui/primitives/input'

const { fieldContext, formContext } = createFormHookContexts()
export const { useAppForm } = createFormHook({
  fieldContext,
  fieldComponents: {
    Input,
  },
  formContext,
  formComponents: {
    Button,
  },
})
