import { Style } from './styles'

import { TStitchesVariants } from '@app/types/stitches.types'

import { ButtonHTMLAttributes } from 'react'

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    TStitchesVariants<typeof Style> {}
