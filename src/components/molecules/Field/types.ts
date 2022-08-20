import { InputHTMLAttributes, ReactNode } from 'react'

export interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  ariaName?: string
  labelIcon?: ReactNode
}

export interface IUseFieldParams {
  type: IFieldProps['type']
}
