import { TReducer } from 'types/redux.types'

export const update: TReducer<any, any> = (state, { payload }) => {
  const prev = state.products

  if (prev && payload) state.products = [...prev, ...payload]
}
