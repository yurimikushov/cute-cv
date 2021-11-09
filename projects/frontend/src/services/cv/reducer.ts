import { combineReducers } from '@reduxjs/toolkit'
import { positionReducer } from './position'
import { avatarReducer } from './avatar'
import { aboutMeReducer } from './aboutMe'
import { experiencesReducer } from './experiences'
import { educationsReducer } from './educations'
import { contactsReducer } from './contacts'
import { technologiesReducer } from './technologies'
import { languagesReducer } from './languages'

const cvReducer = combineReducers({
  position: positionReducer,
  avatar: avatarReducer,
  aboutMe: aboutMeReducer,
  experiences: experiencesReducer,
  educations: educationsReducer,
  contacts: contactsReducer,
  technologies: technologiesReducer,
  languages: languagesReducer,
})

export default cvReducer
