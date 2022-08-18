/* eslint-disable @next/next/no-img-element */
import { useCube } from './logic'
import { CubeStyle, Face, Perspective } from './styles'
import { ICubeProps, ICubeRef } from './types'

import { forwardRef } from 'react'

export const Cube = forwardRef<ICubeRef, ICubeProps>(
  ({ back: Back, front: Front, left: Left, right: Right }, ref) => {
    const { onCubePanEnd, controls, cubeRef, cubeHeight } = useCube({ ref })

    return (
      <Perspective ref={ref as any} onPanEnd={onCubePanEnd}>
        <CubeStyle
          animate={controls}
          ref={cubeRef as any}
          transition={{ duration: 1 }}
        >
          <Face
            draggable={false}
            className='front'
            css={{ transform: `translateZ(${cubeHeight}px)` }}
          >
            {Front}
          </Face>

          <Face draggable={false} className='left'>
            {Left}
          </Face>

          <Face draggable={false} className='right'>
            {Right}
          </Face>

          <Face
            className='back'
            draggable={false}
            css={{ transform: `translateZ(-${cubeHeight}px) rotateY(-180deg)` }}
          >
            {Back}
          </Face>
        </CubeStyle>
      </Perspective>
    )
  }
)
