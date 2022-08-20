import { styled } from 'styles'

export const Styles = styled('button', {
  width: '100%',
  height: '$22',
  radius: '$3',

  variants: {
    variant: {
      enable: { theme: '$tertiary_500' },
      disabled: {
        color: '$tertiary_500_color',
        border: 'solid 1px $tertiary_500_color',
        backgroundColor: 'transparent'
      }
    }
  },

  defaultVariants: { variant: 'enable' }
})
