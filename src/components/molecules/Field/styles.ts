import { styled } from '@app/styles'

export const Input = styled('input', {
  px: '$4',
  width: '100%',
  border: 'none',
  height: '100%',

  backgroundColor: 'transparent',
  autoFill: '$secondary_contrast_1',

  '&:focus': { outline: 'none' },

  fontSize: '$3',

  variants: {
    state: {
      errored: { color: '$error_1' },
      filled: { color: '$primary_1' },
      focused: { color: '$secondary_contrast_1' },
      default: { color: '$secondary_contrast_1' }
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
      focused: { '*': { fill: '$secondary_contrast_1' } },
      default: { '*': { fill: '$secondary_contrast_1' } },
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
      css: { '*': { stroke: '$secondary_contrast_1', fill: 'none' } }
    },
    {
      stroke: true,
      state: 'focused',
      css: { '*': { stroke: '$secondary_contrast_1', fill: 'none' } }
    }
  ],

  defaultVariants: { state: 'default' }
})

export const Style = styled('div', {
  position: 'relative',

  display: 'flex',
  alignItems: 'center',

  radius: '$3',
  width: '100%',
  borderWidth: 1,
  borderStyle: 'solid',

  variants: {
    onlyBottom: {
      true: {
        radius: '0px',
        borderTopWidth: '0px',
        borderLeftWidth: '0px',
        borderRightWidth: '0px'
      }
    },
    state: {
      errored: { borderColor: '$error_1' },
      filled: { borderColor: '$secondary_contrast_1' },
      default: { borderColor: '$secondary_contrast_1' },
      focused: { borderColor: '$primary_1' }
    }
  },

  defaultVariants: { state: 'default' }
})
