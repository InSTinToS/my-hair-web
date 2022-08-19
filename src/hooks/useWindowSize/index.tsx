import { IWindowSize } from './types'

import { useEffect, useState } from 'react'

const debounce = (functionToDebounce: (args: any) => void, timeout: number) => {
  let timer: NodeJS.Timeout | string | number | undefined

  return (args: any) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      timer = undefined

      functionToDebounce(args)
    }, timeout)
  }
}

const getDimensions = () => ({
  innerHeight: globalThis.innerHeight,
  innerWidth: globalThis.innerWidth
})

export const useWindowSize = (): IWindowSize => {
  const [dimensions, setDimensions] = useState<IWindowSize>(getDimensions())

  useEffect(() => {
    const resize = () => {
      setDimensions(prev => {
        const newDimensions = getDimensions()

        return prev === newDimensions ? prev : newDimensions
      })
    }

    const debouncedResize = debounce(resize, 1000)

    if (!dimensions) resize()

    globalThis.addEventListener('resize', debouncedResize)

    return () => globalThis.removeEventListener('resize', debouncedResize)
  }, [dimensions])

  return dimensions
}
