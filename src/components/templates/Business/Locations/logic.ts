import { TOnSignInSubmit } from '../../Home/SignIn/types'

import { ICollapseProps } from '@app/components/molecules/Collapse/types'

import { ILocation } from '@app/types/location.types'
import { TFormProps } from '@app/types/react.types'

import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import schema from 'yup/lib/schema'

export const useLocations = () => {
  const [open, setOpen] = useState(false)
  const [locations, setLocations] = useState<ILocation[]>()

  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: {
      state: '',
      link: '',
      street: '',
      number: '',
      country: '',
      complement: ''
    }
  })

  const onCollapseChange: ICollapseProps['onOpenChange'] = open => {
    setOpen(open)
  }

  const onFormSubmit: TFormProps['onSubmit'] = event => {
    handleSubmit(data => {
      console.log(data)
    })(event)
  }

  return { onCollapseChange, locations, open, onFormSubmit, register }
}
