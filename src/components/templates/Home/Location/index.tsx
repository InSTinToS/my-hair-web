import { useLocation } from './logic'
import { ArrowButton, BackgroundImages } from './styles'

import { theme } from '@app/styles'

import { Cube } from '@app/components/molecules/Cube'

import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export const Location = () => {
  const { cubeRef, onLeftArrowClick, onRightArrowClick } = useLocation()

  return (
    <BackgroundImages draggable={false}>
      <ArrowButton type='button' direction='left' onClick={onLeftArrowClick}>
        <FiChevronLeft
          size={theme.space['12'].value}
          color={theme.colors.secondary_500_text.value}
        />
      </ArrowButton>

      <Cube
        ref={cubeRef}
        interval={{ direction: 'right', ms: 3500 }}
        front={
          <Image
            priority
            layout='fill'
            alt='barber shop'
            objectFit='cover'
            draggable={false}
            src='/barberShop/1.jpg'
          />
        }
        left={
          <Image
            layout='fill'
            draggable={false}
            alt='barber shop'
            objectFit='cover'
            src='/barberShop/2.jfif'
          />
        }
        right={
          <Image
            layout='fill'
            draggable={false}
            objectFit='cover'
            alt='barber shop'
            src='/barberShop/3.jpg'
          />
        }
        back={
          <Image
            layout='fill'
            draggable={false}
            alt='barber shop'
            objectFit='cover'
            src='/barberShop/4.jpg'
          />
        }
      />

      <ArrowButton type='button' onClick={onRightArrowClick}>
        <FiChevronRight
          size={theme.space['12'].value}
          color={theme.colors.secondary_500_text.value}
        />
      </ArrowButton>
    </BackgroundImages>
  )
}
