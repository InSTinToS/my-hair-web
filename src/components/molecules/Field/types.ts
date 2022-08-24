import { TInputProps } from 'types/react.types'

import { ReactNode } from 'react'
import { UseFormRegister } from 'react-hook-form'

export type TOnInputBlur = TInputProps['onBlur']
export type TOnInputFocus = TInputProps['onFocus']
export type TOnInputChange = TInputProps['onChange']

export interface IFieldProps extends TInputProps {
  error?: any
  name: string
  ariaName?: string
  isFilled?: boolean
  register: UseFormRegister<any>
  label?: {
    text?: string
    icon?: ReactNode
    colorType?: 'fill' | 'stroke'
  }
}

export interface IUseFieldParams {
  type: IFieldProps['type']
  name: IFieldProps['name']
  register: IFieldProps['register']
}
