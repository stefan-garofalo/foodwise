'use client'

import { signOut } from '@/modules/auth/lib/client/actions'

import { Button } from '@/modules/ui/primitives/button'
import { ClassProps } from '@/modules/ui/utils/types'
import { merge } from '@/modules/ui/utils/tailwind'

import { LogOut } from 'lucide-react'

export function LogoutButton({ className }: ClassProps) {
	return (
		<Button
			onClick={signOut}
			className={merge(className)}
			variant="danger"
			size="icon"
		>
			<LogOut />
		</Button>
	)
}
