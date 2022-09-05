import { styled } from '@app/styles'

import { CSS } from '@stitches/react'

const themeVariant = (theme: string): CSS => ({
  theme: `$${theme}_2`,
  border: `solid 1px $${theme}_1`,

  '&:hover': { theme: `$${theme}_1` }
})

export const Style = styled('button', {
  flexCenter: 'row',

  p: '$5',
  border: 'none',

  fontSize: '$3',
  cursor: 'pointer',

  backgroundColor: 'transparent',

  '&:disabled': {
    cursor: 'default',

    backgroundColor: 'transparent',

    '&:hover': { backgroundColor: 'transparent' }
  },

  variants: {
    radius: {
      none: { radius: '0px' },
      normal: { radius: '$3' }
    },
    theme: {
      info: themeVariant('info'),
      error: themeVariant('error'),
      primary: themeVariant('primary'),
      success: themeVariant('success')
    }
  },

  defaultVariants: { radius: 'normal' }
})
