import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import {
  LanguagesStateT,
  AddPayloadT,
  UpdatePayloadT,
  DeletePayloadT,
} from './model'

const initialState: LanguagesStateT = {
  ids: [],
  languagesById: {},
}

const { actions, reducer } = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    add: {
      reducer: (state, { payload }: PayloadAction<AddPayloadT>) => {
        state.ids.push(payload.id)
        state.languagesById[payload.id] = {
          id: payload.id,
          language: payload.language,
        }
      },
      prepare: () => ({
        payload: {
          id: nanoid(),
          language: '',
        },
      }),
    },
    update: {
      reducer: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
        state.languagesById[payload.id].language = payload.language
      },
      prepare: (id: string, language: string) => ({
        payload: {
          id,
          language,
        },
      }),
    },
    erase: {
      reducer: (state, { payload }: PayloadAction<DeletePayloadT>) => {
        state.ids = filter(state.ids, (id) => payload.id !== id)
        state.languagesById = omit(state.languagesById, payload.id)
      },
      prepare: (id: string) => ({
        payload: {
          id,
        },
      }),
    },
  },
})

export const { add, update, erase } = actions
export default reducer
