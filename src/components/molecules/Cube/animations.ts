import { TMove } from './types'

import {
  MotionProps,
  useAnimationControls,
  useMotionValue
} from 'framer-motion'
import { useState } from 'react'

export const useCubeAnimations = () => {
  const cubeRotateY = useMotionValue(0)
  const controls = useAnimationControls()
  const [moved, setMoved] = useState(false)

  const move: TMove = ({ ignoreFirstMove = false, direction }) => {
    const directionToNumber = direction === 'left' ? 90 : -90

    controls.start({
      scale: [1, 0.5, 1],
      transition: { duration: 1 },
      rotateY: cubeRotateY.get() + directionToNumber
    })

    cubeRotateY.set(cubeRotateY.get() + directionToNumber)

    if (!ignoreFirstMove) setMoved(true)
  }

  const cubeAnimationsProps: MotionProps = {
    animate: controls,
    transition: { duration: 1 }
  }

  return { move, moved, cubeAnimationsProps }
}
