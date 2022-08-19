import type { ICubeExport, IUseCubeParams, TDynamicCSSKeys } from './types'

import { useCubeAnimations } from './animations'

import { useTabFocus } from 'hooks/useTabFocus'
import { useWindowSize } from 'hooks/useWindowSize'

import { TDynamicCSS } from 'types/stitches.types'

import { PanHandlers } from 'framer-motion'
import { useEffect, useImperativeHandle, useRef, useState } from 'react'

export const useCube = ({ ref, interval }: IUseCubeParams) => {
  const { tabHasFocus } = useTabFocus()
  const { innerWidth } = useWindowSize()
  const [cubeWidth, setCubeWidth] = useState(0)
  const cubeRef = useRef<HTMLUListElement>(null)
  const { moved, move, cubeAnimationsProps } = useCubeAnimations()

  const dynamicCSS: TDynamicCSS<TDynamicCSSKeys> = {
    frontFace: { transform: `translateZ(${cubeWidth / 2}px)` },
    backFace: { transform: `translateZ(-${cubeWidth / 2}px) rotateY(-180deg)` }
  }

  const onCubePanEnd: PanHandlers['onPanEnd'] = (_, { offset: { x } }) =>
    move({ direction: x < 0 ? 'right' : 'left' })

  useImperativeHandle<ICubeExport, ICubeExport>(ref, () => ({ move }))

  useEffect(() => {
    setCubeWidth(cubeRef.current?.clientWidth || 0)
  }, [innerWidth, cubeRef])

  useEffect(() => {
    if (interval && tabHasFocus) {
      const timer = setInterval(() => {
        move({ ignoreFirstMove: true, direction: interval.direction })
      }, interval.ms)

      moved && clearInterval(timer)

      return () => {
        clearInterval(timer)
      }
    }
  }, [move, moved, interval, tabHasFocus])

  return { cubeRef, cubeAnimationsProps, dynamicCSS, onCubePanEnd }
}
