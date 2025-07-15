import {
  default as NextImage,
  type ImageProps as NextImageProps,
} from 'next/image'

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
  if (!(fill || (item.height && item.width))) return null
  return (
    <NextImage
      {...(fill
        ? { fill }
        : {
            width: +item.width!,
            height: +item.height!,
          })}
      alt={
        item?.alt ??
        alt ??
        process?.env?.NEXT_PUBLIC_FRONTEND_URL?.split('//')[1] ??
        ''
      }
      sizes={sizes}
      src={item.url}
      {...props}
    />
  )
}
