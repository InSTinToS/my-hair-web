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
  width: '66vw',
  flexCenter: 'row',
  position: 'relative',
  backgroundColor: '$secondary_500_color'
})

export const SignInForm = styled('form', {
  flex: 1,
  width: '40%',
  flexCenter: 'row',
  theme: '$primary_500'
})

export const SignIn = styled('main', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'row'
})
