import { File, Header, Style } from './styles'

import { Locations } from './sections/Locations'

import { AddImage } from '@app/components/atoms/Icon/icons/AddImage'

export const BarberShop = () => {
  return (
    <>
      <Header>
        <File htmlFor='thumbnail'>
          <input type='file' name='thumbnail' />

          <AddImage size='lg' fill='primary_contrast' />
        </File>
      </Header>

      <Style>
        <Locations />
      </Style>
    </>
  )
}
