import { createReducer } from '@reduxjs/toolkit'
import { updateTechnologies } from './actions'
import { TechnologiesStateT } from './model'

const initialState: TechnologiesStateT = {
  technologies: '',
}

const languagesReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateTechnologies, (state, { payload }) => {
    state.technologies = payload.technologies
  })
})

export default languagesReducer
