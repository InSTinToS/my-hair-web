import { styled } from 'styles'

export const Input = styled('input', {
  px: '$2',
  width: '100%',
  border: 'none',
  height: '100%',

  color: '$tertiary_500_color',
  backgroundColor: 'transparent',
  autoFill: '$tertiary_500_color',

  '&:focus': { outline: 'none' },

  variants: {
    errored: { true: { color: '$error_500_color' } },
    focused: { true: { color: '$primary_500_text' } }
  },

  compoundVariants: [
    { focused: 'true', errored: 'true', css: { color: '$primary_500_text' } }
  ]
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

export const IconWrapper = styled('button', {
  flexCenter: 'row',

  p: '$5',
  width: '$16',
  border: 'none',
  height: '100%',
  minWidth: '$16',

  backgroundColor: 'transparent',

  '*': { size: '100%' },

  variants: {
    fillType: {
      fill: { '*': { fill: '$primary_500_text' } },
      stroke: { '*': { stroke: '$primary_500_text' } }
    },
    focused: { true: { '*': { fill: '$primary_500_text' } } },
    filled: { true: { '*': { fill: '$tertiary_500_color' } } },
    errored: { true: { '*': { fill: '$error_500_color' } } }
  },

  compoundVariants: [
    {
      filled: true,
      focused: true,
      fillType: 'fill',
      css: { '*': { fill: '$primary_500_text' } }
    },
    {
      filled: true,
      focused: true,
      fillType: 'stroke',
      css: { '*': { stroke: '$primary_500_text', fill: 'none' } }
    },
    {
      filled: true,
      fillType: 'stroke',
      css: { '*': { stroke: '$tertiary_500_color', fill: 'none' } }
    },
    {
      focused: true,
      fillType: 'stroke',
      css: { '*': { stroke: '$primary_500_text', fill: 'none' } }
    },
    {
      errored: true,
      focused: false,
      fillType: 'stroke',
      css: { '*': { stroke: '$error_500_color', fill: 'none' } }
    }
  ],

  defaultVariants: { fillType: 'fill' }
})

export const Style = styled('div', {
  position: 'relative',

  display: 'flex',
  alignItems: 'center',

  radius: '$3',
  height: '$22',
  width: '100%',
  minWidth: '$64',
  borderWidth: 1,
  borderStyle: 'solid',

  variants: {
    focused: { true: { borderColor: '$tertiary_500_color' } },
    errored: { true: { borderColor: '$error_500_color' } }
  },

  compoundVariants: [
    {
      focused: 'true',
      errored: 'true',
      css: { borderColor: '$tertiary_500_color' }
    }
  ]
})
