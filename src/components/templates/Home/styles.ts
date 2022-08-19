import { styled } from 'styles'

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
  width: '100vw',
  height: '100vh',
  flexCenter: 'row',
  position: 'relative',
  backgroundColor: '$secondary_500_color',
  '@lg': { width: '66vw' }
})

export const SignInForm = styled('form', {
  windowSize: 100,
  theme: '$primary_500',
  '@lg': { width: '40%' }
})

export const SignIn = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  '@lg': { flexDirection: 'row' }
})
