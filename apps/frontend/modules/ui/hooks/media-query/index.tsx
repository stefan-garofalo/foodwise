import { useCallback, useSyncExternalStore } from 'react'

export function useIsMobile() {
	return useMediaQuery('(max-width: 768px)')
}

export function useIsDesktop() {
	return useMediaQuery('(min-width: 769px)')
}

export function MobileMediaQuery({ children }: { children: React.ReactNode }) {
	const isMobile = useIsMobile()
	return isMobile ? children : null
}

export function DesktopMediaQuery({ children }: { children: React.ReactNode }) {
	const isDesktop = useIsDesktop()
	return isDesktop ? children : null
}

function useMediaQuery(query: string) {
	const subscribe = useCallback(
		(callback: (event: MediaQueryListEvent) => void) => {
			const matchMedia = window.matchMedia(query)

			matchMedia.addEventListener('change', callback)
			return () => {
				matchMedia.removeEventListener('change', callback)
			}
		},
		[query]
	)

	const getSnapshot = () => {
		return window.matchMedia(query).matches
	}

	return useSyncExternalStore(subscribe, getSnapshot)
}
