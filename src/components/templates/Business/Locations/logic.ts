import { ICollapseProps } from '@app/components/molecules/Collapse/types'

import { ILocation } from '@app/types/location.types'

import { useEffect, useState } from 'react'

const fakeLocations: ILocation[] = [
  {
    city: 'SP',
    link: 'Link',
    number: 22,
    country: 'Brasil',
    street: 'Rua Mackenzie'
  },
  {
    city: 'SP',
    link: 'Link',
    number: 22,
    country: 'Brasil',
    street: 'Rua Mackenzie'
  }
]

export const useLocations = () => {
  const [open, setOpen] = useState(false)
  const [locations, setLocations] = useState<ILocation[]>()

  useEffect(() => {
    setLocations(fakeLocations)
  }, [])

  const onCollapseChange: ICollapseProps['onOpenChange'] = open => {
    setOpen(open)
  }

  return { onCollapseChange, locations, open }
}
