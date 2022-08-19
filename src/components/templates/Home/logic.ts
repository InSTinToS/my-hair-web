import { ICubeForwarded } from 'components/molecules/Cube/types'

import { useRef } from 'react'

export const useHome = () => {
  const cubeRef = useRef<ICubeForwarded>(null)

  const onRightArrowClick = () => {
    cubeRef.current?.move({ direction: 'right' })
  }

  const onLeftArrowClick = () => {
    cubeRef.current?.move({ direction: 'left' })
  }

  return { cubeRef, onRightArrowClick, onLeftArrowClick }
}
