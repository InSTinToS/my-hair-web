import { IButtonProps } from '@app/components/atoms/Button/types'

import { useState } from 'react'

export const useAddSection = () => {
  const [showSection, setShowSection] = useState(false)

  const onAddClick: IButtonProps['onClick'] = () => {
    setShowSection(prev => !prev)
  }

  return { showSection, onAddClick }
}
