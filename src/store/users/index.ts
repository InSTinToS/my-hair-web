import { update } from './reducers/update'

import { createSlice } from '@reduxjs/toolkit'

const initialState = { loading: undefined, users: undefined }

const usersStore = createSlice({
  initialState,

  name: 'users-store',
  reducers: { update }
})

export { usersStore }
