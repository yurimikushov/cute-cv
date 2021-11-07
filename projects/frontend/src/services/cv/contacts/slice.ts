import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import {
  ContactsStateT,
  AddPayloadT,
  UpdatePayloadT,
  DeletePayloadT,
} from './model'

const initialState: ContactsStateT = {
  ids: [],
  contactsById: {},
}

const { actions, reducer } = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: {
      reducer: (state, { payload }: PayloadAction<AddPayloadT>) => {
        state.ids.push(payload.id)
        state.contactsById[payload.id] = {
          id: payload.id,
          text: payload.text,
          href: payload.href,
        }
      },
      prepare: () => ({
        payload: {
          id: nanoid(),
          text: '',
          href: '',
        },
      }),
    },
    update: {
      reducer: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
        state.contactsById[payload.id].text = payload.text
        state.contactsById[payload.id].href = payload.href
      },
      prepare: (id: string, text: string, href: string) => ({
        payload: {
          id,
          text,
          href,
        },
      }),
    },
    erase: {
      reducer: (state, { payload }: PayloadAction<DeletePayloadT>) => {
        state.ids = filter(state.ids, (id) => payload.id !== id)
        state.contactsById = omit(state.contactsById, payload.id)
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
