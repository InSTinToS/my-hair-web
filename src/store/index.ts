import { usersStore } from './users'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: { usersStore: usersStore.reducer }
})

export { store }
