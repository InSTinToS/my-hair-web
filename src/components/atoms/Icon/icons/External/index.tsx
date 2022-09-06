import { Icon } from '../..'
import { IIconProps } from '../../types'

export const External = ({ ...props }: IIconProps) => {
  return (
    <Icon
      fill='none'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M8.88889 0L11.816 2.92711L5.59378 9.14933L6.85067 10.4062L13.0729 4.184L16 7.11111V0H8.88889Z' />
      <path d='M14.2222 14.2222H1.77778V1.77778H8L6.22222 0H1.77778C0.797333 0 0 0.797333 0 1.77778V14.2222C0 15.2027 0.797333 16 1.77778 16H14.2222C15.2027 16 16 15.2027 16 14.2222V9.77778L14.2222 8V14.2222Z' />
    </Icon>
  )
}
