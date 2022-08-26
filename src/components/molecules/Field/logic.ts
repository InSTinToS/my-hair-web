import { IUseFieldParams, TOnInputBlur, TOnInputFocus } from './types'

import { useState } from 'react'

export const useField = ({
  type,
  error,
  label,
  onBlur,
  onFocus,
  isFilled
}: IUseFieldParams) => {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const showEyes = type === 'password'
  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type
  const showClosedEye = inputType !== 'password'

  const eyeLabel = showClosedEye
    ? `Esconder ${label?.text?.toLowerCase()}`
    : `Mostrar ${label?.text?.toLowerCase()}`

  let fieldState: 'default' | 'focused' | 'filled' | 'errored' = 'default'

  fieldState = isFilled ? 'filled' : fieldState
  fieldState = error ? 'errored' : fieldState
  fieldState = isFocused ? 'focused' : fieldState

  const onEyeClick = () => {
    setShowPassword(prev => !prev)
  }

  const onInputFocus: TOnInputFocus = event => {
    onFocus && onFocus(event)
    setIsFocused(true)
  }

  const onInputBlur: TOnInputBlur = event => {
    onBlur && onBlur(event)
    setIsFocused(false)
  }

  return {
    eyeLabel,
    showEyes,
    isFocused,
    inputType,
    onEyeClick,
    fieldState,
    onInputBlur,
    onInputFocus,
    showClosedEye
  }
}
