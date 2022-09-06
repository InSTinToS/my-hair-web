import { Style } from './styles'

import { Map } from '@app/components/atoms/Icon/icons/Map'

import { useRouter } from 'next/router'
import { useState } from 'react'

export const Aside = () => {
  const router = useRouter()
  const [show, setShow] = useState(false)

  return (
    <Style>
      <header>
        <button onClick={() => setShow(prev => !prev)}>
          <img alt='barbearia' src='/barberShop/1.jpg' />
        </button>

        {show && <span>Miguel Andrade</span>}
      </header>

      <ul>
        <li>
          <button onClick={() => router.push('/business')}>
            <Map fill='secondary_contrast' size='md' />

            {show && <span>Adicionar barbearia</span>}
          </button>
        </li>
      </ul>
    </Style>
  )
}
