import { combineReducers } from '@reduxjs/toolkit'
import { languagesReducer } from './languages'

const rootReducer = combineReducers({
  languages: languagesReducer,
})

type RootStateT = ReturnType<typeof rootReducer>

export default rootReducer
export type { RootStateT }
