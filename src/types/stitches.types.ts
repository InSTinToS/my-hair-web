import { CSS } from '@stitches/react'

export type TDynamicCSS<Keys extends string = any> = Record<Keys, CSS>
