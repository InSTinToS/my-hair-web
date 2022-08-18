import { space } from './themes/common/space'
import { colors } from './themes/dark/colors'

import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors,
    space
  },
  media: {},
  utils: {
    theme: (theme: string) => ({
      color: `${theme}_text`,
      backgroundColor: `${theme}_color`
    }),
    flexCenter: (direction: 'row' | 'col') => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: direction === 'col' ? 'column' : 'row'
    })
  }
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  }
})
