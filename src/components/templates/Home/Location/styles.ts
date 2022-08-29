import { styled } from '@app/styles'

export const ArrowButton = styled('button', {
  zIndex: 2,
  border: 'none',
  cursor: 'pointer',
  position: 'absolute',
  backgroundColor: 'transparent',
  defaultVariants: { direction: 'right' },
  variants: { direction: { left: { left: '$4' }, right: { right: '$4' } } }
})

export const BackgroundImages = styled('aside', {
  width: '100%',
  height: '100vh',
  flexCenter: 'row',
  position: 'relative',
  backgroundColor: '$secondary_500_color',

  '@lg': { width: '66vw' }
})
