import { styled } from '@app/styles'

const primaryCompounds = [
  {
    theme: 'primary',
    state: 'enable',
    css: { theme: '$primary_2', '&:hover': { theme: '$primary_1' } }
  },
  {
    theme: 'primary',
    state: 'disabled',
    css: { color: '$primary_1', border: 'solid 1px $primary_1' }
  }
]

const successCompounds = [
  {
    theme: 'success',
    state: 'enable',
    css: { theme: '$success_2', '&:hover': { theme: '$success_1' } }
  },
  {
    theme: 'success',
    state: 'disabled',
    css: { color: '$success_1', border: 'solid 1px $success_1' }
  }
]

const errorCompounds = [
  {
    theme: 'error',
    state: 'enable',
    css: { theme: '$error_2', '&:hover': { theme: '$error_1' } }
  },
  {
    theme: 'error',
    state: 'disabled',
    css: { color: '$error_1', border: 'solid 1px $error_1' }
  }
]

export const Style = styled('button', {
  width: '100%',
  height: '$20',
  radius: '$3',

  border: 'none',

  variants: {
    state: {
      disabled: { backgroundColor: 'transparent' },
      enable: { cursor: 'pointer', transition: 'all 0.3s ease-in-out' }
    },
    theme: { primary: {}, success: {}, error: {} }
  },

  compoundVariants: [
    ...primaryCompounds,
    ...successCompounds,
    ...errorCompounds
  ],

  defaultVariants: { state: 'enable', theme: 'primary' }
})
