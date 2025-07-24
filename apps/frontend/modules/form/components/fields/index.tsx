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

type SelectOption = {
  value: string
  label: string
  icon?: React.ReactNode
}
type SelectProps = PropsWithChildren &
  (
    | {
        name: string
        placeholder?: string
        options: SelectOption[]
        label: string
        groupLabel?: string
        asChild?: boolean
      }
    | {
        label: string
        asChild: true
        name: string
        placeholder?: string
        options?: undefined
        groupLabel?: undefined
      }
  )
export const Select = ({
  name,
  placeholder,
  label,
  groupLabel,
  asChild,
  options,
  children,
}: SelectProps) => (
  <div>
    <Label className="pb-2.5" htmlFor={name}>
      {label}
    </Label>

    <SelectPrimitive name={name}>
      <SelectTrigger>
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
                  {option.value}
                  {option.icon}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        )}
      </SelectContent>
    </SelectPrimitive>
  </div>
)
