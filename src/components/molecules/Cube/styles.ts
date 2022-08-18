import { styled } from 'styles'

import { motion } from 'framer-motion'

export const Perspective = styled(motion.div, {
  width: '100%',
  height: '100%',
  perspective: 2500,
  flexCenter: 'row',
  overflow: 'hidden',
  ':hover': { cursor: 'grab' },
  ':active': { cursor: 'grabbing' }
})

export const CubeStyle = styled(motion.ul, {
  width: '80%',
  height: '80%',
  listStyle: 'none',
  position: 'relative',
  transformStyle: 'preserve-3d'
})

export const Face = styled(motion.li, {
  top: 0,
  opacity: 1,
  width: '100%',
  height: '100%',
  userSelect: 'none',
  position: 'absolute',
  backgroundColor: '$primary_500_color',
  '&.right': { transform: 'translateX(50%) rotateY(90deg)' },
  '&.left': { transform: 'translateX(-50%) rotateY(-90deg)' }
})
