/* eslint-disable @next/next/no-img-element */
import { Style } from './styles'
import { IBusinessCardProps } from './types'

export const BusinessCard = ({ item: { name } }: IBusinessCardProps) => (
  <Style>
    <a>
      <img alt='barbearia' src='/barberShop/1.jpg' />

      <div>
        <strong>{name}</strong>
        <span>14,4 km</span>
      </div>
    </a>
  </Style>
)
