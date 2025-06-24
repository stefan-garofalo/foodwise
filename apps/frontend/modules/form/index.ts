import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { Input } from '../ui/primitives/input'
import { Button } from '../ui/primitives/button'

const { fieldContext, formContext } = createFormHookContexts()
export const { useAppForm } = createFormHook({
	fieldContext,
	fieldComponents: {
		Button
	},
	formContext,
	formComponents: {
		Input
	}
})
