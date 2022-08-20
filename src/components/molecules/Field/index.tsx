import { useField } from './logic'
import { Icon, Input, Label, Style } from './styles'
import { IFieldProps } from './types'

import { ClosedEye } from 'components/atoms/Icon/icons/ClosedEye'
import { Eye } from 'components/atoms/Icon/icons/Eye'

import { composeClassName } from 'utils/composeClassName'

export const Field = ({
  type,
  name,
  label,
  labelIcon: LabelIcon,
  className,
  ...props
}: IFieldProps) => {
  const { showEye, showEyes, inputType, onEyeClick, onClosedEyeClick } =
    useField({ type })

  return (
    <Style className={composeClassName(`Field ${name}Field`, className)}>
      {LabelIcon && (
        <Icon as='label' htmlFor={name}>
          {LabelIcon}
        </Icon>
      )}

      {label && <Label htmlFor={name}>{label}</Label>}

      <Input id={name} name={name} type={inputType} {...props} />

      {showEyes && (
        <Icon type='button'>
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
