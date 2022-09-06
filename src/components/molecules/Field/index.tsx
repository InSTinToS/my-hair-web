import { useField } from './logic'
import { IconWrapper, Input, Label, Style } from './styles'
import { IFieldProps } from './types'

import { Tooltip } from '../Tooltip'

import { Alert } from '@app/components/atoms/Icon/icons/Alert'
import { ClosedEye } from '@app/components/atoms/Icon/icons/ClosedEye'
import { Eye } from '@app/components/atoms/Icon/icons/Eye'

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
      grid = false,
      onlyBottom = false,
      ...props
    },
    ref
  ) => {
    const {
      showEyes,
      eyeLabel,
      inputType,
      onEyeClick,
      fieldState,
      onInputBlur,
      onInputFocus,
      showClosedEye
    } = useField({ type, onBlur, onFocus, label, error, isFilled })

    return (
      <Style
        state={fieldState}
        className={className}
        onlyBottom={onlyBottom}
        css={{
          gridArea: grid ? name : undefined,
          height: label?.text ? '$22' : '$16'
        }}
      >
        {error ? (
          <Tooltip
            content={error}
            sideOffset={-4}
            trigger={
              <IconWrapper state='errored'>
                <Alert />
              </IconWrapper>
            }
          />
        ) : (
          label?.icon && (
            <IconWrapper as='label' htmlFor={name} state={fieldState}>
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
          autoFocus={false}
          spellCheck={false}
          state={fieldState}
          autoComplete='off'
          onBlur={onInputBlur}
          onFocus={onInputFocus}
          {...props}
        />

        {showEyes && (
          <IconWrapper
            stroke
            as='button'
            type='button'
            state={fieldState}
            onClick={onEyeClick}
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
