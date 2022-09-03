import { Close, Country, External, Street, Style } from './styles'
import { ILocationProps } from './types'

export const Location = ({
  location: { city, link, number, street, country }
}: ILocationProps) => (
  <Style>
    <Close size='sm' fill='secondary_contrast' />

    <Country>
      {country}, {city}
    </Country>

    <Street>
      {street}, {number}
    </Street>

    {link && <External size='sm' fill='info' href={link} />}
  </Style>
)
