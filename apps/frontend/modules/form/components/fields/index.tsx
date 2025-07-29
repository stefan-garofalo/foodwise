import type { PropsWithChildren } from 'react'
import Label from '@/modules/ui/primitives/label'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  Select as SelectPrimitive,
  SelectTrigger,
  SelectValue,
} from '@/modules/ui/primitives/select'
import { merge } from '@/modules/ui/utils/tailwind'

type SelectOption = {
  value: string
  label?: string
  icon?: React.ReactNode
}
type SelectProps = PropsWithChildren & {
  className?: string
  name: string
  placeholder?: string
} & (
    | {
        options: SelectOption[]
        groupLabel?: string
        asChild?: boolean
      }
    | {
        asChild: true

        options?: undefined
        groupLabel?: undefined
      }
  )
export const Select = ({
  name,
  placeholder,
  className,
  groupLabel,
  asChild,
  options,
  children,
}: SelectProps) => (
  <SelectPrimitive name={name}>
    <SelectTrigger className={merge('w-full', className)}>
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {asChild ? (
        children
      ) : (
        <SelectGroup>
          {groupLabel && <SelectLabel>{groupLabel}</SelectLabel>}
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <span className="flex flex-row items-center gap-x-2.5">
                {option?.label}
                {option?.icon}
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      )}
    </SelectContent>
  </SelectPrimitive>
)
