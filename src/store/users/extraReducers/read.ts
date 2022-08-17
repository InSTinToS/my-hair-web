import { TExtraReducers, TPayloadCreator } from 'typescript/redux.types'

import { createAsyncThunk } from '@reduxjs/toolkit'

const read: TPayloadCreator<any, any> = async () => {
  const users: any[] = []

  return { loading: false, users }
}

const readThunk = createAsyncThunk('users-store/read', read)

const readExtraReducers: TExtraReducers<any> = ({ addCase }) => {
  addCase(readThunk.pending, state => ({ ...state, loading: true }))

  addCase(readThunk.fulfilled, (state, { payload }) => ({
    ...state,
    ...payload,
    loading: false
  }))

  addCase(readThunk.rejected, state => ({
    ...state,
    loading: false
  }))
}

export { readExtraReducers, readThunk }
