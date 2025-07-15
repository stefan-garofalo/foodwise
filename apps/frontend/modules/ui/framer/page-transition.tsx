import { MotionDiv } from './primitives'

export default function PageTransition({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MotionDiv
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ ease: 'easeInOut' }}
    >
      {children}
    </MotionDiv>
  )
}
