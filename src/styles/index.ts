import { media } from './themes/common/media'
import { space } from './themes/common/space'
import { colors } from './themes/dark/colors'
import { utils } from './utils'

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
  utils,
  media,
  theme: { colors, space }
})

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' }
})
