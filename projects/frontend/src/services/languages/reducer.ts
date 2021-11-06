import { createReducer } from '@reduxjs/toolkit'
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import { addLanguage, deleteLanguage, updateLanguage } from './actions'
import { LanguagesStateT } from './model'

const initialState: LanguagesStateT = {
  ids: [],
  languagesById: {},
}

const languagesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addLanguage, (state, { payload }) => {
      state.ids.push(payload.id)
      state.languagesById[payload.id] = {
        id: payload.id,
        language: payload.language,
      }
    })
    .addCase(updateLanguage, (state, { payload }) => {
      state.languagesById[payload.id].language = payload.language
    })
    .addCase(deleteLanguage, (state, { payload }) => {
      state.ids = filter(state.ids, (id) => payload.id !== id)
      state.languagesById = omit(state.languagesById, payload.id)
    })
})

export default languagesReducer
