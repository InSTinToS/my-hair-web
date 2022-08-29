import { styled } from '@app/styles'

export const Input = styled('input', {
  px: '$2',
  width: '100%',
  border: 'none',
  height: '100%',

  backgroundColor: 'transparent',
  autoFill: '$primary_500_text',

  '&:focus': { outline: 'none' },

  variants: {
    state: {
      errored: { color: '$error_500_color' },
      focused: { color: '$primary_500_text' },
      filled: { color: '$tertiary_500_color' },
      default: { color: '$primary_500_text' }
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

  backgroundColor: '$primary_500_color'
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
      errored: { '*': { fill: '$error_500_color' } },
      focused: { '*': { fill: '$primary_500_text' } },
      default: { '*': { fill: '$primary_500_text' } },
      filled: { '*': { fill: '$tertiary_500_color' } }
    },
    stroke: { true: {} }
  },

  compoundVariants: [
    {
      stroke: true,
      state: 'filled',
      css: { '*': { stroke: '$tertiary_500_color', fill: 'none' } }
    },
    {
      stroke: true,
      state: 'errored',
      css: { '*': { stroke: '$error_500_color', fill: 'none' } }
    },
    {
      stroke: true,
      state: 'default',
      css: { '*': { stroke: '$primary_500_text', fill: 'none' } }
    },
    {
      stroke: true,
      state: 'focused',
      css: { '*': { stroke: '$primary_500_text', fill: 'none' } }
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
      errored: { borderColor: '$error_500_color' },
      filled: { borderColor: '$primary_500_text' },
      default: { borderColor: '$primary_500_text' },
      focused: { borderColor: '$tertiary_500_color' }
    }
  },

  defaultVariants: { state: 'default' },

  '*': {}
})
