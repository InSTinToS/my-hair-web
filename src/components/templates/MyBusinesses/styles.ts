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
  border: 'solid red 1px',

  ul: {
    display: 'flex',
    listStyle: 'none',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
})
