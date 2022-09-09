import {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  InputHTMLAttributes
} from 'react'

export type TFormProps = FormHTMLAttributes<HTMLFormElement>
export type TInputProps = InputHTMLAttributes<HTMLInputElement>
export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export type TTimer = string | number | NodeJS.Timeout | undefined
