import {
  AnyAction,
  configureStore,
  Dispatch,
  MiddlewareAPI,
} from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import rootReducer from './reducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

const persistor = persistStore(store)

type RootStateT = ReturnType<typeof rootReducer>

type Store = MiddlewareAPI<Dispatch, RootStateT>

type Middleware = (
  store: MiddlewareAPI<Dispatch, RootStateT>
) => (dispatch: Dispatch) => (action: AnyAction) => unknown

export default store
export { persistor }
export type { RootStateT, Store, Middleware }
