import { styled } from '@app/styles'

export const Input = styled('input', {
  px: '$2',
  width: '100%',
  border: 'none',
  height: '100%',

  backgroundColor: 'transparent',
  autoFill: '$secondary_1_contrast',

  '&:focus': { outline: 'none' },

  variants: {
    state: {
      errored: { color: '$error_1' },
      focused: { color: '$secondary_1_contrast' },
      filled: { color: '$primary_1' },
      default: { color: '$secondary_1_contrast' }
    }
  },

  defaultVariants: { state: 'default' }
})

export const Label = styled('label', {
  position: 'absolute',
  top: 0,
  left: 0,
  transform: 'translateY(-50%)',

  ml: '$4',
  px: '$2',

  backgroundColor: '$secondary_1'
})

export const IconWrapper = styled('div', {
  flexCenter: 'row',

  p: '$5',
  width: '$16',
  border: 'none',
  height: '100%',
  minWidth: '$16',

  backgroundColor: 'transparent',

  '*': { size: '100%' },

  variants: {
    state: {
      errored: { '*': { fill: '$error_1' } },
      focused: { '*': { fill: '$secondary_1_contrast' } },
      default: { '*': { fill: '$secondary_1_contrast' } },
      filled: { '*': { fill: '$primary_1' } }
    },
    stroke: { true: {} }
  },

  compoundVariants: [
    {
      stroke: true,
      state: 'filled',
      css: { '*': { stroke: '$primary_1', fill: 'none' } }
    },
    {
      stroke: true,
      state: 'errored',
      css: { '*': { stroke: '$error_1', fill: 'none' } }
    },
    {
      stroke: true,
      state: 'default',
      css: { '*': { stroke: '$secondary_1_contrast', fill: 'none' } }
    },
    {
      stroke: true,
      state: 'focused',
      css: { '*': { stroke: '$secondary_1_contrast', fill: 'none' } }
    }
  ],

  defaultVariants: { state: 'default' }
})

export const Style = styled('div', {
  position: 'relative',

  display: 'flex',
  alignItems: 'center',

  radius: '$3',
  height: '$22',
  width: '100%',
  borderWidth: 1,
  minWidth: '$64',
  borderStyle: 'solid',

  variants: {
    state: {
      errored: { borderColor: '$error_1' },
      filled: { borderColor: '$secondary_1_contrast' },
      default: { borderColor: '$secondary_1_contrast' },
      focused: { borderColor: '$primary_1' }
    }
  },

  defaultVariants: { state: 'default' }
})
