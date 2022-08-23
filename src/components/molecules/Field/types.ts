import { InputHTMLAttributes, ReactNode } from 'react'
import { UseFormRegister } from 'react-hook-form'

export interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  ariaName?: string
  isFilled?: boolean
  labelIcon?: ReactNode
  register?: UseFormRegister<any>
}

export interface IUseFieldParams {
  type: IFieldProps['type']
  name: IFieldProps['name']
  isFilled: IFieldProps['isFilled']
  register: IFieldProps['register']
}
