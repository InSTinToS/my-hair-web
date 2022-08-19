import { ReactNode, Ref } from 'react'

type TMoveDirections = 'left' | 'right'

export interface ICubeProps {
  left: ReactNode
  back: ReactNode
  front: ReactNode
  right: ReactNode
  interval?: { ms: number; direction: TMoveDirections }
}

export interface ICubeExport {
  move: TMove
}

export interface ICubeForwarded extends HTMLDivElement, ICubeExport {}

export interface IUseCubeParams {
  ref: Ref<ICubeForwarded>
  interval: ICubeProps['interval']
}

export type TDynamicCSSKeys = 'backFace' | 'frontFace'

export type TMove = (params: {
  ignoreFirstMove?: boolean
  direction: TMoveDirections
}) => void
