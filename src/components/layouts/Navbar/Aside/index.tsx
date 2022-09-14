/* eslint-disable @next/next/no-img-element */
import { Style } from './styles'

import { AnimatedSpan } from './AnimatedSpan'
import { Item } from './Item'

import { Map } from '@app/components/atoms/Icon/icons/Map'

export const Aside = ({ show, setShow }: any) => (
  <Style show={show}>
    <header>
      <button onClick={() => setShow((prev: boolean) => !prev)}>
        <img alt='barbearia' src='/barberShop/1.jpg' />

        <AnimatedSpan label='Miguel Andrade' condition={show} />
      </button>
    </header>

    <ul>
      <Item
        condition={show}
        label='Buscar Barbearias'
        icon={<Map fill='secondary_contrast' size='md' />}
      />
    </ul>
  </Style>
)
