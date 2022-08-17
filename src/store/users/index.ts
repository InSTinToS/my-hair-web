import { update } from './reducers/update'

import type { TExtraReducers } from 'typescript/redux.types'

import { createSlice } from '@reduxjs/toolkit'

const initialState = { loading: undefined, users: undefined }

const extraReducers: TExtraReducers<any> = builder => {}

const usersStore = createSlice({
  initialState,
  extraReducers,
  name: 'users-store',
  reducers: { update }
})

export { usersStore }
