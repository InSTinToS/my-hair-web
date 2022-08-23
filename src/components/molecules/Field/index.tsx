import { useField } from './logic'
import { Icon, Input, Label, Style } from './styles'
import { IFieldProps } from './types'

import { ClosedEye } from 'components/atoms/Icon/icons/ClosedEye'
import { Eye } from 'components/atoms/Icon/icons/Eye'

export const Field = ({
  type,
  name,
  label,
  register,
  isFilled,
  labelIcon: LabelIcon,
  ...props
}: IFieldProps) => {
  const {
    eyeCSS,
    showEye,
    showEyes,
    labelCSS,
    styleCSS,
    inputType,
    onEyeClick,
    valueColor,
    onInputBlur,
    onInputFocus,
    registerProps,
    onClosedEyeClick
  } = useField({ type, register, name, isFilled })

  return (
    <Style css={styleCSS} {...props}>
      {LabelIcon && (
        <Icon as='label' htmlFor={name} css={labelCSS}>
          {LabelIcon}
        </Icon>
      )}

      {label && <Label htmlFor={name}>{label}</Label>}

      <Input
        id={name}
        type={inputType}
        spellCheck={false}
        {...registerProps}
        onBlur={onInputBlur}
        onFocus={onInputFocus}
        css={{ color: valueColor }}
      />

      {showEyes && (
        <Icon type='button' css={eyeCSS}>
          {showEye ? (
            <Eye className='eye' onClick={onEyeClick} />
          ) : (
            <ClosedEye className='eye' onClick={onClosedEyeClick} />
          )}
        </Icon>
      )}
    </Style>
  )
}
