import { combineReducers } from '@reduxjs/toolkit'
import { educationsReducer } from './educations'
import { contactsReducer } from './contacts'
import { technologiesReducer } from './technologies'
import { languagesReducer } from './languages'

const cvReducer = combineReducers({
  educations: educationsReducer,
  contacts: contactsReducer,
  technologies: technologiesReducer,
  languages: languagesReducer,
})

export default cvReducer
