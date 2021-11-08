import { combineReducers } from '@reduxjs/toolkit'
import { experiencesReducer } from './experiences'
import { educationsReducer } from './educations'
import { contactsReducer } from './contacts'
import { technologiesReducer } from './technologies'
import { languagesReducer } from './languages'

const cvReducer = combineReducers({
  experiences: experiencesReducer,
  educations: educationsReducer,
  contacts: contactsReducer,
  technologies: technologiesReducer,
  languages: languagesReducer,
})

export default cvReducer
