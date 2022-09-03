import { styled } from '@app/styles'

export const Form = styled('form', {
  width: '100%',
  p: '$7',

  '@sm': {
    display: 'grid',
    grid: `
      'country  country state   state'
      'street   street  street  number'
      'link     link    link    link'
      'submit   submit  submit  submit' / 1fr 100px 1fr 100px
    `,
    gridColumnGap: '$10'
  }
})

export const LocationsList = styled('ul', { pl: '$16' })

export const Style = styled('section', { px: '$10' })
