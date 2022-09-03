import { styled } from '@app/styles'

export const Title = styled('h2', {
  my: '$4',

  fontSize: '$4',
  color: '$tertiary_contrast_1',

  '@sm': { mx: '$10' }
})

export const Style = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@sm': { justifyContent: 'normal' }
})
