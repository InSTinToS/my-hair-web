import type { TStoreDispatch } from 'types/redux.types'

import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<TStoreDispatch>()
