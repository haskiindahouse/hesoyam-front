import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { api } from 'src/services/api'
import {
  TypedUseSelectorHook,
  useDispatch as useReactReduxDispatch,
  useSelector as useReactReduxSelector
} from 'react-redux'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer
})

export function setupStore(preloadedState?: Partial<RootState>) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
      }).concat(api.middleware)
  })
  return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => AppDispatch = useReactReduxDispatch
export const useSelector: TypedUseSelectorHook<RootState> =
  useReactReduxSelector
