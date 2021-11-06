import { combineReducers } from '@reduxjs/toolkit'
import { technologiesReducer } from './technologies'
import { languagesReducer } from './languages'

const rootReducer = combineReducers({
  technologies: technologiesReducer,
  languages: languagesReducer,
})

export default rootReducer
