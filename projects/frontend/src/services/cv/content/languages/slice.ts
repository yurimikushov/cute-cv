import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import map from 'lodash/map'
import keyBy from 'lodash/keyBy'
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import { load } from 'services/cv/load'
import { SERVICE_NAME } from '../constants'
import { LanguagesStateT, UpdatePayloadT, DeletePayloadT } from './model'

const initialState: LanguagesStateT = {
  ids: [],
  languagesById: {},
}

const { actions, reducer } = createSlice({
  name: `${SERVICE_NAME}/languages`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(load.fulfilled, (state, { payload }) => {
      const { languages } = payload.content

      state.ids = map(languages, 'id')
      state.languagesById = keyBy(languages, 'id')
    })
  },
  reducers: {
    add: (state) => {
      const id = nanoid()

      state.ids.push(id)
      state.languagesById[id] = {
        id,
        language: '',
      }
    },
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.languagesById[payload.id].language = payload.language
    },
    erase: (state, { payload }: PayloadAction<DeletePayloadT>) => {
      state.ids = filter(state.ids, (id) => payload.id !== id)
      state.languagesById = omit(state.languagesById, payload.id)
    },
  },
})

export const { add, update, erase } = actions
export default reducer
