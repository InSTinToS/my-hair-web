import { TInputProps } from '@app/types/react.types'

import { ReactNode } from 'react'

export interface IFieldProps extends TInputProps {
  name: string
  error?: string
  grid?: boolean
  ariaName?: string
  isFilled?: boolean
  onlyBottom?: boolean
  type?: TInputProps['type']
  label?: { text?: string; icon?: ReactNode; colorType?: 'fill' | 'stroke' }
}

export interface IUseFieldParams {
  type?: IFieldProps['type']
  label?: IFieldProps['label']
  error?: IFieldProps['error']
  onBlur?: IFieldProps['onBlur']
  onFocus?: IFieldProps['onFocus']
  isFilled?: IFieldProps['isFilled']
}

export type TOnInputBlur = IFieldProps['onBlur']

export type TOnInputFocus = IFieldProps['onFocus']
