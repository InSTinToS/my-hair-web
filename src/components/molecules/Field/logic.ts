import { IUseFieldParams } from './types'

import { useState } from 'react'

export const useField = ({ type }: IUseFieldParams) => {
  const [showPassword, setShowPassword] = useState(false)

  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type
  const showEyes = type === 'password'
  const showEye = inputType === 'password'

  const onEyeClick = () => {
    setShowPassword(true)
  }

  const onClosedEyeClick = () => {
    setShowPassword(false)
  }

  return { showEye, showEyes, inputType, onEyeClick, onClosedEyeClick }
}
