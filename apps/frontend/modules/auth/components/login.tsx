'use client'

import { GoogleIcon } from '@/modules/ui/icons'
import { Button } from '@/modules/ui/primitives/button'
import { usePageDictionary } from '@/modules/i18n/hooks/dictionaries'
import { ClassProps } from '@/modules/ui/utils/types'
import { merge } from '@/modules/ui/utils/tailwind'
import { signInWithGoogle } from '@/modules/auth/lib/client/actions'

export function LoginButton({ className }: ClassProps) {
	const labels = usePageDictionary<'login'>()

	return (
		<Button
			onClick={signInWithGoogle}
			className={merge(className)}
			variant="default"
			size="full"
		>
			<GoogleIcon color="currentColor" /> {labels.actions.google}
		</Button>
	)
}
