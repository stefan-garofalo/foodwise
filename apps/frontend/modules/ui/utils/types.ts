import type { ClassValue } from 'clsx'
import type { PropsWithChildren } from 'react'

export type ClassProps = { className?: ClassValue }
export type BaseComponentProps = PropsWithChildren & ClassProps
