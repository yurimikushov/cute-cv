import { createSlice } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { LoadingStateT } from './model'

const initialState: LoadingStateT = {
  isLoading: true,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.app}/loading`,
  initialState,
  reducers: {
    begin: (state) => {
      state.isLoading = true
    },
    complete: (state) => {
      state.isLoading = false
    },
  },
})

export const { begin, complete } = actions
export default reducer
