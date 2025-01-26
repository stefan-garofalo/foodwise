
import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function merge(...args: ClassValue[]) {
	return twMerge(clsx(args))
}
export type { ClassValue }
