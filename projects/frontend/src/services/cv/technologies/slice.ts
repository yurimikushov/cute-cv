import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TechnologiesStateT, UpdatePayloadT } from './model'

const initialState: TechnologiesStateT = {
  technologies: '',
}

const { actions, reducer } = createSlice({
  name: 'technologies',
  initialState,
  reducers: {
    update: {
      reducer: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
        state.technologies = payload.technologies
      },
      prepare: (technologies: string) => ({
        payload: {
          technologies,
        },
      }),
    },
  },
})

export const { update } = actions
export default reducer
