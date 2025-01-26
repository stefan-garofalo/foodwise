'use client'

import useOptimisticParams from '@/feat/search/hooks/useOptimisticParams'
import { SORTS, DEFAULT_SORT } from '@/feat/search/config'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/ui/components/Select'
import IconSort from '@/ui/icons/Sort'

export default function Sort() {
	const { setOptimisticState, isPending } = useOptimisticParams(
		'sort',
		DEFAULT_SORT.id
	)
	return (
		<Select
			onValueChange={(e) => setOptimisticState(e)}
			defaultValue={DEFAULT_SORT.id}
		>
			<SelectTrigger
				disabled={isPending}
				data-pending={isPending ? '' : undefined}
				className="gap-x-2 disabled:cursor-not-allowed disabled:opacity-50"
			>
				<IconSort className="size-5" />
				<SelectValue placeholder="Select a verified email to display" />
			</SelectTrigger>

			<SelectContent>
				{SORTS.map((e) => (
					<SelectItem
						key={e.id}
						value={e.id}
						className="capitalize hover:bg-border"
					>
						{e.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
