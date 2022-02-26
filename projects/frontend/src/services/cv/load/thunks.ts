import { createAsyncThunk } from '@reduxjs/toolkit'
import isNull from 'lodash/isNull'
import cvApi from 'api/cv'
import { ServiceNameEnum } from 'services'

const loadAll = createAsyncThunk(`${ServiceNameEnum.cv}/loadAll`, async () => {
  const allCv = await cvApi.loadAll()
  return allCv
})

const load = createAsyncThunk(
  `${ServiceNameEnum.cv}/load`,
  async (id: string, { rejectWithValue }) => {
    const cv = await cvApi.load(id)

    if (isNull(cv)) {
      throw rejectWithValue({ isEmpty: true })
    }

    return cv
  }
)

type LoadResult = NonNullable<Awaited<ReturnType<typeof cvApi.load>>>

export { loadAll, load }
export type { LoadResult }
