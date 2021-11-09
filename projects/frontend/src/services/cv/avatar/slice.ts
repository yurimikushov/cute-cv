import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AvatarStateT, UpdatePayloadT } from './model'

const initialState: AvatarStateT = {
  src: null,
}

const { actions, reducer } = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.src = payload.src
    },
    erase: (state) => {
      state.src = null
    },
  },
})

export const { update, erase } = actions
export default reducer
