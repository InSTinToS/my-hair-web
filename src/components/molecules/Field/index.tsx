import { useField } from './logic'
import { IconWrapper, Input, Label, Style } from './styles'
import { IFieldProps } from './types'

import { Tooltip } from '../Tooltip'

import { Alert } from 'components/atoms/Icon/icons/Alert'
import { ClosedEye } from 'components/atoms/Icon/icons/ClosedEye'
import { Eye } from 'components/atoms/Icon/icons/Eye'

export const Field = ({
  type,
  name,
  label,
  error,
  register,
  isFilled,
  className,
  ...props
}: IFieldProps) => {
  const {
    showEyes,
    inputRef,
    inputType,
    isFocused,
    onEyeClick,
    onInputBlur,
    onInputFocus,
    showClosedEye,
    onInputChange,
    onClosedEyeClick
  } = useField({ type, name, register })

  return (
    <Style className={className} focused={isFocused} errored={!!error}>
      {error && !isFocused ? (
        <Tooltip
          sideOffset={-12}
          content={error.message}
          trigger={
            <IconWrapper errored={!!error}>
              <Alert />
            </IconWrapper>
          }
        />
      ) : (
        label?.icon && (
          <IconWrapper
            as='label'
            htmlFor={name}
            filled={!!isFilled}
            focused={isFocused}
            fillType={label.colorType}
          >
            {label.icon}
          </IconWrapper>
        )
      )}

      {label?.text && <Label htmlFor={name}>{label.text}</Label>}

      <Input
        id={name}
        name={name}
        ref={inputRef}
        type={inputType}
        errored={!!error}
        spellCheck={false}
        focused={isFocused}
        onBlur={onInputBlur}
        onFocus={onInputFocus}
        onChange={onInputChange}
        {...props}
      />

      {showEyes && (
        <IconWrapper
          type='button'
          fillType='stroke'
          errored={!!error}
          filled={!!isFilled}
          focused={!!isFocused}
        >
          {showClosedEye ? (
            <ClosedEye className='eye' onClick={onClosedEyeClick} />
          ) : (
            <Eye className='eye' onClick={onEyeClick} />
          )}
        </IconWrapper>
      )}
    </Style>
  )
}
