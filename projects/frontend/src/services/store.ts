import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'

const store = configureStore({ reducer: rootReducer })

type RootStateT = ReturnType<typeof rootReducer>

export default store
export type { RootStateT }
