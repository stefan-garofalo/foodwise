import { merge } from '@/modules/ui/utils/tailwind'
import { BaseComponentProps } from '../utils/types'

const tags = {
	title: 'h1',
	subtitle: 'h2'
}
const classes = {
	title: 'text-title-xs lg:text-title',
	subtitle: 'text-xl lg:text-title-sm'
}

type TypographyProps = BaseComponentProps & {
	variant: keyof typeof tags
	heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
export const Title = ({
	children,
	className,
	variant = 'title',
	heading
}: TypographyProps) => {
	const Heading = (heading ?? tags[variant]) as any
	const typog = classes[variant]
	return (
		<Heading className={merge(typog, 'font-instrument', className)}>
			{children}
		</Heading>
	)
}
