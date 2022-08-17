import { TReducer } from 'typescript/redux.types'

const update: TReducer<any, any> = (state, { payload }) => {
  const prev = state.products

  if (prev && payload) state.products = [...prev, ...payload]
}

export { update }
