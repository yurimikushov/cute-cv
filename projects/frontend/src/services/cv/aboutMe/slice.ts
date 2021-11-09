import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AboutMeStateT, UpdatePayloadT } from './model'

const initialState: AboutMeStateT = {
  aboutMe: '',
}

const { actions, reducer } = createSlice({
  name: 'aboutMe',
  initialState,
  reducers: {
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.aboutMe = payload.aboutMe
    },
  },
})

export const { update } = actions
export default reducer
