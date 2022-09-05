import { IButtonProps } from '@app/components/atoms/Button/types'

import { useState } from 'react'

export const useAddContent = () => {
  const [show, setShow] = useState(false)

  const onAddClick: IButtonProps['onClick'] = () => {
    setShow(prev => !prev)
  }

  return { show, onAddClick }
}
