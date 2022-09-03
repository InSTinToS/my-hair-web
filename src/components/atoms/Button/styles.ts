import { styled } from '@app/styles'

import { CSS } from '@stitches/react'

const invisibleVariant = (theme: string): CSS => ({
  color: `$${theme}_2`,

  '&:hover': { color: `$${theme}_1` }
})

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
    invisible: {
      primary: invisibleVariant('primary'),
      primary_contrast: invisibleVariant('primary_contrast'),

      secondary: invisibleVariant('secondary'),
      secondary_contrast: invisibleVariant('secondary_contrast'),

      tertiary: invisibleVariant('tertiary'),
      tertiary_contrast: invisibleVariant('tertiary_contrast'),

      info: invisibleVariant('info'),
      info_contrast: invisibleVariant('info_contrast'),

      error: invisibleVariant('error'),
      error_contrast: invisibleVariant('error_contrast'),

      success: invisibleVariant('success'),
      success_contrast: invisibleVariant('success_contrast')
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
