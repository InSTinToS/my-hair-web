import { usersStore } from './users'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: { usersStore: usersStore.reducer }
})
