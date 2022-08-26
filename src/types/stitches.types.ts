import { CSS } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export type TDynamicCSS<Keys extends string = any> = Record<Keys, CSS>

export type TStitchesVariants<TypeOfStyle> = Stitches.VariantProps<TypeOfStyle>
