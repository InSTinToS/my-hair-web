import { useField } from './logic'
import { IconWrapper, Input, Label, Style } from './styles'
import { IFieldProps } from './types'

import { Tooltip } from '../Tooltip'

import { Alert } from 'components/atoms/Icon/icons/Alert'
import { ClosedEye } from 'components/atoms/Icon/icons/ClosedEye'
import { Eye } from 'components/atoms/Icon/icons/Eye'

import { forwardRef } from 'react'

export const Field = forwardRef<HTMLInputElement, IFieldProps>(
  (
    {
      type,
      name,
      label,
      error,
      onBlur,
      onFocus,
      isFilled,
      className,
      ...props
    },
    ref
  ) => {
    const {
      showEyes,
      eyeLabel,
      inputType,
      isFocused,
      onEyeClick,
      onInputBlur,
      onInputFocus,
      showClosedEye
    } = useField({ type, onBlur, onFocus, label })

    return (
      <Style className={className} focused={isFocused} errored={!!error}>
        {error && !isFocused ? (
          <Tooltip
            content={error}
            sideOffset={-12}
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
          ref={ref}
          id={name}
          name={name}
          type={inputType}
          errored={!!error}
          spellCheck={false}
          focused={isFocused}
          onBlur={onInputBlur}
          onFocus={onInputFocus}
          {...props}
        />

        {showEyes && (
          <IconWrapper
            type='button'
            fillType='stroke'
            errored={!!error}
            filled={!!isFilled}
            onClick={onEyeClick}
            focused={!!isFocused}
            aria-label={eyeLabel}
          >
            {showClosedEye ? (
              <ClosedEye className='eye' />
            ) : (
              <Eye className='eye' />
            )}
          </IconWrapper>
        )}
      </Style>
    )
  }
)

Field.displayName = 'Field'
