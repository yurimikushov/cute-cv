import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import map from 'lodash/map'
import keyBy from 'lodash/keyBy'
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import swap from 'lib/reorder'
import { load } from 'services/cv/load'
import {
  ContactsStateT,
  UpdateTextPayloadT,
  UpdateHrefPayloadT,
  DeletePayloadT,
  ReorderPayloadT,
} from './model'
import { SERVICE_NAME } from '../constants'

const initialState: ContactsStateT = {
  ids: [],
  contactsById: {},
}

const { actions, reducer } = createSlice({
  name: `${SERVICE_NAME}/contacts`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(load.fulfilled, (state, { payload }) => {
      const { contacts } = payload.content

      state.ids = map(contacts, 'id')
      state.contactsById = keyBy(contacts, 'id')
    })
  },
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
    reorder: (state, { payload }: PayloadAction<ReorderPayloadT>) => {
      state.ids = swap(state.ids, payload.startIndex, payload.endIndex)
    },
  },
})

export const { add, updateText, updateHref, erase, reorder } = actions
export default reducer
