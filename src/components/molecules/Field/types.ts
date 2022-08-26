import { TInputProps } from 'types/react.types'

import { ReactNode } from 'react'

export interface IFieldProps extends TInputProps {
  name: string
  error?: string
  ariaName?: string
  isFilled?: boolean
  type?: TInputProps['type']
  label?: { text?: string; icon?: ReactNode; colorType?: 'fill' | 'stroke' }
}

export interface IUseFieldParams {
  label?: IFieldProps['label']
  type?: IFieldProps['type']
  onBlur?: IFieldProps['onBlur']
  onFocus?: IFieldProps['onFocus']
}

export type TOnInputBlur = IFieldProps['onBlur']

export type TOnInputFocus = IFieldProps['onFocus']
