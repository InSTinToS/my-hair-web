import { IUser } from './user.types'

export interface ILocation {
  id: string
  link: string
  state: string
  number: string
  street: string
  country: string
  complement: string
}

export interface IBusiness {
  id?: string
  name: string
  thumbnail?: string
  locations?: Location[]
  admins_ids: IUser['id'][]
}
