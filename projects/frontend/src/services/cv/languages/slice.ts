import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import { LanguagesStateT, UpdatePayloadT, DeletePayloadT } from './model'

const initialState: LanguagesStateT = {
  ids: [],
  languagesById: {},
}

const { actions, reducer } = createSlice({
  name: 'languages',
  initialState,
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
