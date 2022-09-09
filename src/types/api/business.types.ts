import { IUser } from './user.types'

export interface IBusiness {
  id?: string
  name: string
  thumbnail?: string
  locations?: Location[]
  admins_ids: IUser['id'][]
}
