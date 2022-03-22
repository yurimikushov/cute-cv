import {
  AnyAction,
  configureStore,
  Dispatch,
  MiddlewareAPI,
} from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import rootReducer from './reducer'
import { cvMiddlewares } from './edit-cv'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    ...cvMiddlewares,
  ],
})

const persistor = persistStore(store)

type RootState = ReturnType<typeof rootReducer>

type Store = MiddlewareAPI<Dispatch, RootState>

type Middleware = (
  store: MiddlewareAPI<Dispatch, RootState>
) => (dispatch: Dispatch) => (action: AnyAction) => unknown

export default store
export { persistor }
export type { RootState, Store, Middleware }
