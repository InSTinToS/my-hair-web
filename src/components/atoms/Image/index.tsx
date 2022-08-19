import type { IImageProps } from './types'

import composeClassName from 'utils/composeClassName'

import NextImage from 'next/image'

export const Image = ({ className, ...props }: IImageProps) => (
  <div className={composeClassName('Image', className)}>
    <NextImage layout='fill' objectFit='contain' {...props} />
  </div>
)
