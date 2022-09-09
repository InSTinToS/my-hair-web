import { IUseAddContentParams } from './types'

import { IButtonProps } from '@app/components/atoms/Button/types'

import { useState } from 'react'

export const useAddContent = ({ onClick }: IUseAddContentParams) => {
  const [show, setShow] = useState(false)

  const onAddClick: IButtonProps['onClick'] = () => {
    setShow(prev => !prev)

    show && onClick && onClick()
  }

  return { show, onAddClick }
}
