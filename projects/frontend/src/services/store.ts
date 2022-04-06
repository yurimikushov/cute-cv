import {
  AnyAction,
  configureStore,
  ConfigureStoreOptions,
  MiddlewareAPI,
} from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import rootReducer from './reducer'
import middlewares from './middlewares'

const config: ConfigureStoreOptions = {
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    ...middlewares,
  ],
}

const store = configureStore(
  // Middleware is described in bad way and it breaks `dispatch` func
  // It's why `middleware` is omitted
  config as Omit<ConfigureStoreOptions, 'middleware'>
)

const persistor = persistStore(store)

type RootState = ReturnType<typeof rootReducer>

type Dispatch = typeof store.dispatch

type Store = MiddlewareAPI<Dispatch, RootState>

type Middleware = (
  store: MiddlewareAPI<Dispatch, RootState>
) => (dispatch: Dispatch) => (action: AnyAction) => unknown

export default store
export { persistor }
export type { RootState, Store, Middleware }
