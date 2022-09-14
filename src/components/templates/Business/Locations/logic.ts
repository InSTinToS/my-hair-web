import { IButtonProps } from '@app/components/atoms/Button/types'

import { ICollapseProps } from '@app/components/molecules/Collapse/types'

import { ILocation } from '@app/types/api/business.types'
import { TFormProps } from '@app/types/react.types'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

const initialValues = {
  state: '',
  link: '',
  street: '',
  number: '',
  country: '',
  complement: ''
}

export const useLocations = () => {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const [items, setItems] = useState<ILocation[]>([])

  const { register, handleSubmit, reset } = useForm({
    mode: 'onBlur',
    defaultValues: initialValues
  })

  const onFormSubmit: TFormProps['onSubmit'] = event => {
    event.preventDefault()

    handleSubmit(data => {
      reset()
    })(event)
  }

  const onCollapseChange: ICollapseProps['onOpenChange'] = open => setOpen(open)

  const onCloseClick = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const onAddClick: IButtonProps['onClick'] = () => {
    setShow(prev => !prev)
  }

  const onCancelClick: IButtonProps['onClick'] = () => {
    setShow(prev => !prev)
    reset()
  }

  return {
    open,
    show,
    items,
    register,
    onAddClick,
    onFormSubmit,
    onCloseClick,
    onCancelClick,
    onCollapseChange
  }
}
