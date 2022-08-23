import { IUseFieldParams } from './types'

import { CSS } from '@stitches/react'
import { useState } from 'react'

export const useField = ({
  type,
  name,
  register,
  isFilled
}: IUseFieldParams) => {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const registerProps = register ? register(name) : undefined

  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type
  const showEyes = type === 'password'
  const showEye = inputType === 'password'

  const iconColor = isFilled ? '$tertiary_500_color' : '$primary_500_text'
  const borderColor = isFocused ? '$tertiary_500_color' : '$primary_500_text'
  const valueColor = !isFocused ? '$tertiary_500_color' : '$primary_500_text'

  const eyeCSS: CSS = { stroke: iconColor }
  const labelCSS: CSS = { '*': { fill: iconColor } }
  const styleCSS: CSS = { border: `solid 1px ${borderColor}` }

  const onEyeClick = () => {
    setShowPassword(true)
  }

  const onClosedEyeClick = () => {
    setShowPassword(false)
  }

  const onInputFocus = () => {
    setIsFocused(true)
  }

  const onInputBlur = () => {
    setIsFocused(false)
  }

  return {
    eyeCSS,
    showEye,
    styleCSS,
    showEyes,
    isFilled,
    labelCSS,
    inputType,
    iconColor,
    onEyeClick,
    valueColor,
    onInputBlur,
    onInputFocus,
    registerProps,
    onClosedEyeClick
  }
}
