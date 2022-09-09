import { Country, External, Street, Style } from './styles'
import { ILocationProps } from './types'

export const Location = ({
  location: { country, link, number, state, street }
}: ILocationProps) => (
  <Style>
    <Country>
      {country}, {state}
    </Country>

    <Street>
      {street}, {number}
    </Street>

    {link && <External size='sm' fill='info' href={link} />}
  </Style>
)
