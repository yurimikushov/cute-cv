import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import map from 'lodash/map'
import keyBy from 'lodash/keyBy'
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import {
  ContactsStateT,
  PresetPayloadT,
  UpdateTextPayloadT,
  UpdateHrefPayloadT,
  DeletePayloadT,
} from './model'
import { SERVICE_NAME } from '../constants'

const initialState: ContactsStateT = {
  ids: [],
  contactsById: {},
}

const { actions, reducer } = createSlice({
  name: `${SERVICE_NAME}/contacts`,
  initialState,
  reducers: {
    preset: (state, { payload }: PayloadAction<PresetPayloadT>) => {
      state.ids = map(payload.contacts, 'id')
      state.contactsById = keyBy(payload.contacts, 'id')
    },
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

export const { preset, add, updateText, updateHref, erase } = actions
export default reducer
