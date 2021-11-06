import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({})

type RootStateT = ReturnType<typeof rootReducer>

export default rootReducer
export type { RootStateT }
