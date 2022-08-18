import { ICubeRef } from 'components/molecules/Cube/types'

import { useRef } from 'react'

export const useHome = () => {
  const cubeRef = useRef<ICubeRef>(null)

  const onRightArrowClick = () => {
    cubeRef.current?.moveToLeft()
  }

  const onLeftArrowClick = () => {
    cubeRef.current?.moveToRight()
  }

  return { cubeRef, onRightArrowClick, onLeftArrowClick }
}
