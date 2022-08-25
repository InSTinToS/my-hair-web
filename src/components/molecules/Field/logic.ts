import { IUseFieldParams, TOnInputBlur, TOnInputFocus } from './types'

import { useState } from 'react'

export const useField = ({ type, onFocus, onBlur, label }: IUseFieldParams) => {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const showEyes = type === 'password'
  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type
  const showClosedEye = inputType !== 'password'

  const eyeLabel = showClosedEye
    ? `Esconder ${label?.text?.toLowerCase()}`
    : `Mostrar ${label?.text?.toLowerCase()}`

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
    onInputBlur,
    onInputFocus,
    showClosedEye
  }
}
