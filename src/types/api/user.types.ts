import { IBusiness } from './Business.types'

export interface IUser {
  id: string

  email: string

  username: string

  password: string

  updated_at: any

  created_at: any

  avatar?: any

  full_name?: string

  business_ids?: IBusiness['id'][]
}
