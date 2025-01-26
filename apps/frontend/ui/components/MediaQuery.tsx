'use client'
import useMediaQuery from '../hooks/useMediaQuery'

export function MediaQueryMobile({ children }: { children: React.ReactNode }) {
	const isDesktop = useMediaQuery()
	return !isDesktop ? children : null
}

export function MediaQueryDesktop({ children }: { children: React.ReactNode }) {
	const isDesktop = useMediaQuery()
	return isDesktop ? children : null
}
