import { Logo as LogoIcon } from 'components/atoms/Icon/icons/Logo'

import { styled } from 'styles'

export const Form = styled('section', {
  px: '$8',
  flexCenter: 'col',
  width: 'min(100%, $116)',

  '> * + *': { mt: '$8' },

  '@lg': { px: '$12' }
})

export const Styles = styled('section', {
  width: '100%',
  flexCenter: 'col',
  theme: '$primary_500',

  height: '80vh',

  '@lg': { width: '40%', height: '100vh' }
})

export const Logo = styled(LogoIcon, {
  height: '$40',
  fill: '$tertiary_500_color'
})
