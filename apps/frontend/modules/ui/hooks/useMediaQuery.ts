import { useEffect, useState } from 'react'

/**
 * Parameters for the useMediaQuery hook.
 */
type UseMediaQueryParams = {
	/** Initial value to use before the effect runs. Defaults to true. */
	fallback?: boolean
	/** Custom media query string. If not provided, defaults to "(min-width: 1024px)". */
	query?: string
}

/**
 * A custom React hook that determines if the current viewport matches a given screen. Defaults to desktop if no query is provided.
 * @param {boolean} [options.fallback=true] - The initial value to use before the effect runs.
 * @param {string} [options.query] - A custom media query string to use instead of the default.
 * @returns {boolean} Whether the current viewport matches the desktop criteria.
 */
export default function useMediaQuery({
	fallback = true,
	query = '(min-width: 1024px)'
}: UseMediaQueryParams = {}): boolean {
	const [isDesktop, setIsDesktop] = useState(fallback)

	useEffect(() => {
		setIsDesktop(window.matchMedia(query).matches)
	}, [query])

	return isDesktop
}
