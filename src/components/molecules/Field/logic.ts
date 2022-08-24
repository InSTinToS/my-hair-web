import {
  IUseFieldParams,
  TOnInputBlur,
  TOnInputChange,
  TOnInputFocus
} from './types'

import { useState } from 'react'

export const useField = ({ type, name, register }: IUseFieldParams) => {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const {
    ref: hookFormRef,
    onBlur: onHookFormBlur,
    onChange: onHookFormChange
  } = register(name)

  const inputRef = hookFormRef
  const showEyes = type === 'password'
  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type

  const showClosedEye = inputType !== 'password'

  const onEyeClick = () => {
    setShowPassword(true)
  }

  const onClosedEyeClick = () => {
    setShowPassword(false)
  }

  const onInputFocus: TOnInputFocus = () => {
    setIsFocused(true)
  }

  const onInputChange: TOnInputChange = event => {
    onHookFormChange(event)
  }

  const onInputBlur: TOnInputBlur = event => {
    onHookFormBlur(event)
    setIsFocused(false)
  }

  return {
    showEyes,
    inputRef,
    isFocused,
    inputType,
    onEyeClick,
    onInputBlur,
    onInputFocus,
    onInputChange,
    showClosedEye,
    onClosedEyeClick
  }
}
