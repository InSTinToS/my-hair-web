import { useCube } from './logic'
import { CubeStyle, Face, Perspective } from './styles'
import { ICubeForwarded, ICubeProps } from './types'

import { forwardRef } from 'react'

export const Cube = forwardRef<ICubeForwarded, ICubeProps>(
  ({ interval, back: Back, front: Front, left: Left, right: Right }, ref) => {
    const { cubeRef, cubeAnimationsProps, dynamicCSS, onCubePanEnd } = useCube({
      ref,
      interval
    })

    return (
      <Perspective ref={ref} onPanEnd={onCubePanEnd}>
        <CubeStyle ref={cubeRef} {...cubeAnimationsProps}>
          <Face className='front' draggable={false} css={dynamicCSS.frontFace}>
            {Front}
          </Face>

          <Face className='left' draggable={false}>
            {Left}
          </Face>

          <Face className='right' draggable={false}>
            {Right}
          </Face>

          <Face className='back' draggable={false} css={dynamicCSS.backFace}>
            {Back}
          </Face>
        </CubeStyle>
      </Perspective>
    )
  }
)
