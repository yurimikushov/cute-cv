import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import map from 'lodash/map'
import keyBy from 'lodash/keyBy'
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import { SERVICE_NAME } from '../constants'
import {
  LanguagesStateT,
  PresetPayloadT,
  UpdatePayloadT,
  DeletePayloadT,
} from './model'

const initialState: LanguagesStateT = {
  ids: [],
  languagesById: {},
}

const { actions, reducer } = createSlice({
  name: `${SERVICE_NAME}/languages`,
  initialState,
  reducers: {
    preset: (state, { payload }: PayloadAction<PresetPayloadT>) => {
      state.ids = map(payload.languages, 'id')
      state.languagesById = keyBy(payload.languages, 'id')
    },
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

export const { preset, add, update, erase } = actions
export default reducer
