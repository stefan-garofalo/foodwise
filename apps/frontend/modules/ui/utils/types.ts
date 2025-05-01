import { ClassValue } from 'clsx'
import { PropsWithChildren } from 'react'

export type ClassProps = { className?: ClassValue }
export type BaseComponentProps = PropsWithChildren & ClassProps
