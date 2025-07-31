import type { ComponentProps, PropsWithChildren } from 'react'
import { Input as InputPrimitive } from '@/modules/ui/primitives/input'
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
import { useFieldContext } from '../../hooks'

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
}: SelectProps) => {
  const field = useFieldContext<string>()

  return (
    <SelectPrimitive
      name={name}
      onValueChange={(value) => field.handleChange(value)}
      value={field.state.value}
    >
      <SelectTrigger className={merge('w-full', className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent onCloseAutoFocus={() => field.handleBlur()}>
        {asChild ? (
          children
        ) : (
          <SelectGroup>
            {groupLabel && <SelectLabel>{groupLabel}</SelectLabel>}
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <span className="flex flex-row items-center gap-x-2.5">
                  {option?.icon}
                  {option?.label}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        )}
      </SelectContent>
    </SelectPrimitive>
  )
}

export const Input = ({ ...props }: ComponentProps<typeof InputPrimitive>) => {
  const field = useFieldContext<string>()
  return (
    <InputPrimitive
      onBlur={field.handleBlur}
      onChange={(e) => field.handleChange(e.target.value)}
      value={field.state.value}
      {...props}
    />
  )
}
