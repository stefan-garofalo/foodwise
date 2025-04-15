import { default as NextImage, ImageProps as NextImageProps } from 'next/image'

type ImageProps = {
	item: {
		url: string
		width?: number
		height?: number
		alt?: string
	}
	alt?: string
} & Omit<NextImageProps, 'src' | 'alt' | 'width' | 'height'>
export default function Image({
	item,
	alt,
	sizes = '(max-width: 1024px) 80vw, 45vw',
	fill = false,
	...props
}: ImageProps) {
	if (!fill && (!item.height || !item.width)) return null
	return (
		<NextImage
			{...(fill
				? { fill: fill }
				: {
						width: +item.width!,
						height: +item.height!
					})}
			src={item.url}
			alt={
				item?.alt ?? alt ?? process?.env?.NEXT_PUBLIC_SITE_URL?.split('//')[1] ?? ''
			}
			sizes={sizes}
			{...props}
		/>
	)
}
