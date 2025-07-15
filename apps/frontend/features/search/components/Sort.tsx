'use client'

import { DEFAULT_SORT, SORTS } from '@/features/search/config'
import useOptimisticParams from '@/features/search/hooks/use-optimistic-params'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/modules/ui/primitives/select'
// import IconSort from '@/modules/ui/icons/Sort'

export default function Sort() {
  const { setOptimisticState, isPending } = useOptimisticParams(
    'sort',
    DEFAULT_SORT.id
  )
  return (
    <Select
      defaultValue={DEFAULT_SORT.id}
      onValueChange={(e) => setOptimisticState(e)}
    >
      <SelectTrigger
        className="gap-x-2 disabled:cursor-not-allowed disabled:opacity-50"
        data-pending={isPending ? '' : undefined}
        disabled={isPending}
      >
        {/* <IconSort className="size-5" /> */}
        <SelectValue placeholder="Select a verified email to display" />
      </SelectTrigger>

      <SelectContent>
        {SORTS.map((e) => (
          <SelectItem
            className="capitalize hover:bg-border"
            key={e.id}
            value={e.id}
          >
            {e.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
