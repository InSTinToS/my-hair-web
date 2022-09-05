import { File, Header, Style } from './styles'

import { AddImage } from '@app/components/atoms/Icon/icons/AddImage'

import { Locations } from '@app/components/templates/BarberShop/Locations'

export const BarberShop = () => (
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
