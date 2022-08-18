import type { IImageProps } from './types'

import composeClassName from 'utils/composeClassName'

import NextImage from 'next/image'

const Image = ({ className, ...props }: IImageProps) => (
  <div className={composeClassName('Image', className)}>
    <NextImage layout='fill' objectFit='contain' {...props} />
  </div>
)

export default Image
