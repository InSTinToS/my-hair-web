import type { IUseCubeParams } from './types'

import {
  PanHandlers,
  useAnimationControls,
  useMotionValue
} from 'framer-motion'
import { useEffect, useImperativeHandle, useRef, useState } from 'react'

export const useCube = ({ ref }: IUseCubeParams) => {
  const cubeRotateY = useMotionValue(0)
  const controls = useAnimationControls()
  const cubeRef = useRef<HTMLDivElement>(null)
  const [cubeHeight, setCubeHeight] = useState(0)

  const moveToRight = () => {
    controls.start({
      scale: [1, 0.5, 1],
      transition: { duration: 1 },
      rotateY: cubeRotateY.get() + 90
    })

    cubeRotateY.set(cubeRotateY.get() + 90)
  }

  const moveToLeft = () => {
    controls.start({
      scale: [1, 0.5, 1],
      transition: { duration: 1 },
      rotateY: cubeRotateY.get() - 90
    })

    cubeRotateY.set(cubeRotateY.get() - 90)
  }

  useImperativeHandle(ref, () => ({ moveToRight, moveToLeft }))

  const onCubePanEnd: PanHandlers['onPanEnd'] = (e, info) => {
    const { x } = info.offset

    x < 0 ? moveToLeft() : moveToRight()
  }

  useEffect(() => {
    const height = cubeRef.current?.clientWidth

    setCubeHeight(height ? height / 2 : 0)
  }, [cubeRef])

  return { onCubePanEnd, controls, cubeRef, cubeHeight }
}
