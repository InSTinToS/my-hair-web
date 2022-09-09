import { styled } from '@app/styles'

export const AddCard = styled('li', {
  m: '$8',
  size: 250,
  radius: '$5',

  span: { ml: '$8', color: '$tertiary_contrast_1' },

  '&, a': { flexCenter: 'row' },
  a: { textDecoration: 'none' },

  border: 'solid 1px $tertiary_contrast_1'
})

export const Style = styled('div', {
  theme: '$tertiary_1',
  minHeight: '100vh',
  pt: '$26',
  pr: '$25',

  ul: {
    display: 'flex',
    listStyle: 'none',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
})
