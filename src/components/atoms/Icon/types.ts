import { SVGAttributes } from 'react'

export interface IIconStyleProps {
  color?: string
}

export interface IIconProps extends SVGAttributes<SVGElement>, IIconStyleProps {
  desc?: string
  title?: string
  labelledBy?: string
}

export interface IUseIconParams {
  labelledBy?: IIconProps['labelledBy']
}
