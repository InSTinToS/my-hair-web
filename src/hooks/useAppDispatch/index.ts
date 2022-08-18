import type { TStoreDispatch } from 'typescript/redux.types'

import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<TStoreDispatch>()
