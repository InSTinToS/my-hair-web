import { styled } from '@app/styles'

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  p: '$10'
})

export const Style = styled('main', {
  pt: '$10',
  minWidth: '$xs',
  minHeight: '100vh',

  backgroundColor: '$tertiary_1'
})

export const File = styled('label', {
  p: '$8',
  radius: '$4',

  border: '$secondary_contrast_1 solid 1px',

  input: { display: 'none' }
})
