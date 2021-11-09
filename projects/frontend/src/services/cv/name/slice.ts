import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NameStateT, UpdatePayloadT } from './model'

const initialState: NameStateT = {
  fullName: '',
}

const { actions, reducer } = createSlice({
  name: 'name',
  initialState,
  reducers: {
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.fullName = payload.fullName
    },
  },
})

export const { update } = actions
export default reducer
