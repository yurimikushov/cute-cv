import { createAsyncThunk } from '@reduxjs/toolkit'
import isNull from 'lodash/isNull'
import cvApi from 'api/cv'
import { ServiceNameEnum } from 'services'

const load = createAsyncThunk(
  `${ServiceNameEnum.cv}/load`,
  async (_, { rejectWithValue }) => {
    const cv = await cvApi.load()

    if (isNull(cv)) {
      throw rejectWithValue({ isEmpty: true })
    }

    return cv
  }
)

export { load }
