import { FormHTMLAttributes, InputHTMLAttributes } from 'react'

export type TFormProps = FormHTMLAttributes<HTMLFormElement>
export type TInputProps = InputHTMLAttributes<HTMLInputElement>
export type TTimer = string | number | NodeJS.Timeout | undefined
