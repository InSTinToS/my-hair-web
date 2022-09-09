import { styled } from '@app/styles'

import { Button as DefaultButton } from '@app/components/atoms/Button'

export const Label = styled('span', { ml: '$7' })

export const SubmitButton = styled(DefaultButton, {
  position: 'absolute',
  right: 0,
  bottom: 0,

  p: '$7',
  width: '50%'
})

export const AddButton = styled(DefaultButton, {
  p: '$7',
  width: '100%'
})

export const CancelButton = styled(DefaultButton, {
  position: 'absolute',
  left: 0,
  bottom: 0,

  width: '50%',

  p: '$7'
})

export const Form = styled('form', {
  p: '$4',
  width: '100%',

  '> *': { mb: '$7' },

  '@sm': {
    display: 'grid',
    gridColumnGap: '$10',
    gridRowGap: '$7',
    grid: `
      'country    country     state       state'
      'street     street      street      number'
      'complement complement  complement  complement' 
      'link       link        link        link'
      'submit     submit      submit      submit'     / 1fr 100px 1fr 100px
    `,

    p: '$7',

    '> *': { mb: 0 }
  }
})

export const Footer = styled('footer', {
  position: 'relative',

  my: '$8',
  radius: '$4',
  maxWidth: '$sm',
  overflow: 'hidden',

  backgroundColor: '$secondary',

  '@sm': { ml: '$16' },

  variants: {
    show: {
      true: {
        pb: '$20',
        border: 'solid 1px $tertiary_contrast_1'
      }
    }
  }
})

export const AddedList = styled('ul', { maxWidth: '$sm', '@sm': { ml: '$16' } })

export const Style = styled('section', {})
