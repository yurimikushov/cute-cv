import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import {
  ContactsStateT,
  UpdateTextPayloadT,
  UpdateHrefPayloadT,
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
    add: (state) => {
      const id = nanoid()

      state.ids.push(id)
      state.contactsById[id] = {
        id,
        text: '',
        href: '',
      }
    },
    updateText: (state, { payload }: PayloadAction<UpdateTextPayloadT>) => {
      state.contactsById[payload.id].text = payload.text
    },
    updateHref: (state, { payload }: PayloadAction<UpdateHrefPayloadT>) => {
      state.contactsById[payload.id].href = payload.href
    },
    erase: (state, { payload }: PayloadAction<DeletePayloadT>) => {
      state.ids = filter(state.ids, (id) => payload.id !== id)
      state.contactsById = omit(state.contactsById, payload.id)
    },
  },
})

export const { add, updateText, updateHref, erase } = actions
export default reducer
