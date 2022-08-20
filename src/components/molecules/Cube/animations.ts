import { TMove } from './types'

import { TTimer } from 'types/timer.types'

import {
  MotionProps,
  useAnimationControls,
  useMotionValue
} from 'framer-motion'
import { useEffect, useState } from 'react'

export const useCubeAnimations = () => {
  let timer: TTimer

  const cubeRotateY = useMotionValue(0)
  const controls = useAnimationControls()
  const [moved, setMoved] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const cubeAnimationsProps: MotionProps = {
    animate: controls,
    transition: { duration: 1 }
  }

  const move: TMove = ({ ignoreFirstMove = false, direction }) => {
    if (disabled) return

    const duration = 1
    const directionToNumber = direction === 'left' ? 90 : -90

    controls.start({
      scale: [1, 0.5, 1],
      transition: { duration },
      rotateY: cubeRotateY.get() + directionToNumber
    })

    cubeRotateY.set(cubeRotateY.get() + directionToNumber)

    if (!ignoreFirstMove) setMoved(true)

    setDisabled(true)

    timer = setTimeout(() => {
      setDisabled(false)
    }, duration * 1000)
  }

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [timer])

  return { move, moved, cubeAnimationsProps }
}
