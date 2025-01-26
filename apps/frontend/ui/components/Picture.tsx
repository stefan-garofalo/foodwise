import { getImageProps, ImageProps } from 'next/image'
import { merge, ClassValue } from '@/lib/tailwind'
import { Prettify } from '@/utils/types'

type Picture = { asset?: unknown; alt?: string }

type PictureProps = {
	desktop?: Picture
	mobile?: Picture
	tablet?: Picture
	className?: ClassValue
	sizes?: string
} & Prettify<Omit<ImageProps, 'src' | 'alt' | 'width' | 'height' | 'className'>>

function imageConfig(variant: Picture | undefined) {
	return {
		width: 0,
		height: 0,
		src: '',
		alt: ''
	}
}

export default function Picture({
	desktop,
	mobile,
	tablet,
	sizes = '(max-width: 1024px) 80vw, 45vw',
	className,
	...props
}: PictureProps) {
	if (!desktop && !mobile && !tablet) return null

	const common = { ...props, sizes }
	const {
		props: { srcSet: desktopSrc }
	} = getImageProps({ ...common, ...imageConfig(desktop) })

	const {
		props: { srcSet: mobileSrc }
	} = getImageProps({ ...common, ...imageConfig(mobile) })

	const {
		props: { srcSet: tabletSrc, ...rest }
	} = getImageProps({ ...common, ...imageConfig(tablet) })

	return (
		<picture>
			{desktop && <source media="(min-width: 1024px)" srcSet={desktopSrc} />}
			{tablet && <source media="(min-width: 640px)" srcSet={tabletSrc} />}
			{mobile && <source media="(max-width: 640px)" srcSet={mobileSrc} />}
			<img {...rest} className={merge(className, 'h-auto w-full')} />
		</picture>
	)
}
