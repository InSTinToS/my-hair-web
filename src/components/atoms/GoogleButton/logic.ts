import { CSS } from '@stitches/react'
import { useState } from 'react'

export const useGoogleButton = () => {
  const [hover, setHover] = useState(false)

  const stylesCSS: CSS = { color: hover ? 'black' : '$google_gray' }
  const googleCSS: CSS = { transform: `scale(${hover ? 1.1 : 1})` }

  const onMouseEnter = () => {
    setHover(true)
  }

  const onMouseLeave = () => {
    setHover(false)
  }

  return { onMouseEnter, onMouseLeave, stylesCSS, googleCSS }
}
