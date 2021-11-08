import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import { ContactsStateT, UpdatePayloadT, DeletePayloadT } from './model'

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
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.contactsById[payload.id].text = payload.text
      state.contactsById[payload.id].href = payload.href
    },
    erase: (state, { payload }: PayloadAction<DeletePayloadT>) => {
      state.ids = filter(state.ids, (id) => payload.id !== id)
      state.contactsById = omit(state.contactsById, payload.id)
    },
  },
})

export const { add, update, erase } = actions
export default reducer
