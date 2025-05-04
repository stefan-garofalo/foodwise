import { useCallback, useSyncExternalStore } from 'react'

export function useIsMobile() {
	return useMediaQuery('(max-width: 768px)')
}

export function useIsDesktop() {
	return useMediaQuery('(min-width: 769px)')
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
