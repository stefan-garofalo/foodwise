'use client'

import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react'
import { useRef } from 'react'
import { type ClassValue, merge } from '@/modules/ui/utils/tailwind'

type ScrollRotateProps = {
  children: React.ReactNode
  className?: ClassValue
  baseVelocity?: number
}
export default function ScrollRotate({
  children,
  className,
  baseVelocity = 30,
}: ScrollRotateProps) {
  const ring = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ring)

  const baseRotate = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const directionFactor = useRef(1)
  useAnimationFrame((_t, delta) => {
    let rotateBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    rotateBy += directionFactor.current * rotateBy * velocityFactor.get()

    baseRotate.set(baseRotate.get() + rotateBy)
  })

  return (
    <motion.div
      className={merge(className, 'aspect-square origin-center')}
      ref={ring}
      style={{ rotate: isInView ? baseRotate : 0 }}
    >
      {children}
    </motion.div>
  )
}
