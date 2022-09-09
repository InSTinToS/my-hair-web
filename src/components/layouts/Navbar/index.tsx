import { Style } from './styles'
import { INavbarProps } from './types'

import { Loupe } from '@app/components/atoms/Icon/icons/Loupe'

import { Field } from '@app/components/molecules/Field'

import { Aside } from '@app/components/layouts/Navbar/Aside'

export const Navbar = ({ children, withSearch = false }: INavbarProps) => (
  <>
    <Style withNavbar={withSearch}>
      {withSearch && (
        <Field
          name='search'
          placeholder='Pesquisar barbearia'
          label={{ icon: <Loupe fill='primary_contrast' size='sm' /> }}
        />
      )}

      <Aside />
    </Style>

    {children}
  </>
)
