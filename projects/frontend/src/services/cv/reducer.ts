import { combineReducers } from '@reduxjs/toolkit'
import { technologiesReducer } from './technologies'
import { languagesReducer } from './languages'

const cvReducer = combineReducers({
  technologies: technologiesReducer,
  languages: languagesReducer,
})

export default cvReducer
