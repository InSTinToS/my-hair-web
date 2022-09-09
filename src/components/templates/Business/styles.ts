import { styled } from '@app/styles'

export const File = styled('label', {
  p: '$8',
  radius: '$4',

  border: '$secondary_contrast_1 solid 1px',

  input: { display: 'none' }
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  p: '$7',

  '@sm': { p: '$10' }
})

export const Style = styled('main', {
  minWidth: '$xs',
  minHeight: '100vh',

  p: '$7',

  backgroundColor: '$tertiary_1',

  '@sm': { p: '$10' }
})
