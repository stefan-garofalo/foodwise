import { MotionDiv } from './primitives'

export default function PageTransition({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<MotionDiv
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut' }}
		>
			{children}
		</MotionDiv>
	)
}
