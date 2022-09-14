import { IUser } from '@app/types/api/user.types'

import { QueryFunction, UseQueryOptions } from 'react-query'

export type TGetUser = QueryFunction<{ user: IUser }>

export interface IUseUserParams {
  email: IUser['email']
  enabled?: UseQueryOptions['enabled']
}
