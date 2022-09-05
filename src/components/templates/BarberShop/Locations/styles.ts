import { styled } from '@app/styles'

import { External as ExternalIcon } from '@app/components/atoms/Icon/icons/External'

export const External = styled(ExternalIcon, { gridArea: 'link' })

export const Street = styled('span', { gridArea: 'street' })

export const Country = styled('strong', { gridArea: 'country' })

export const Location = styled('div', {
  flex: 1,
  display: 'grid',
  alignItems: 'center',

  grid: `
    'close country link' 1fr
    'close street link' 1fr / auto 1fr
  `
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

export const Style = styled('section', {})
