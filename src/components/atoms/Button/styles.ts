import { styled } from 'styles'

export const Styles = styled('button', {
  width: '100%',
  height: '$22',
  radius: '$3',

  variants: {
    variant: {
      enable: {
        cursor: 'pointer',
        theme: '$tertiary_300',
        transition: 'all 0.3s ease-in-out',

        '&:hover': {
          theme: '$tertiary_500'
        }
      },
      disabled: {
        color: '$tertiary_500_color',
        backgroundColor: 'transparent',
        border: 'solid 1px $tertiary_500_color'
      }
    }
  },

  defaultVariants: { variant: 'enable' }
})
