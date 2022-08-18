import { ReactNode, Ref } from 'react'

export interface ICubeProps {
  front: ReactNode
  left: ReactNode
  right: ReactNode
  back: ReactNode
}

export interface IUseCubeParams {
  ref: Ref<ICubeRef>
}

export interface ICubeRef {
  moveToLeft: () => void
  moveToRight: () => void
}
