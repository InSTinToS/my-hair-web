import { CSS } from '@stitches/react'
import { useState } from 'react'

export const useGoogleButton = () => {
  const [hover, setHover] = useState(false)

  const googleCSS: CSS = { transform: `scale(${hover ? 1.1 : 1})` }

  const stylesCSS: CSS = {
    opacity: hover ? 1 : 0.9,
    theme: hover ? '$google_1' : '$google_2'
  }

  const onMouseEnter = () => {
    setHover(true)
  }

  const onMouseLeave = () => {
    setHover(false)
  }

  return { onMouseEnter, onMouseLeave, stylesCSS, googleCSS }
}
