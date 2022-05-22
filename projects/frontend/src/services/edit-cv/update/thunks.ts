import { createAsyncThunk } from '@reduxjs/toolkit'
import cvApi from 'shared/api/cv'
import { ServiceNameEnum } from 'services'
import { UpdatePayload } from './model'

const update = createAsyncThunk(
  `${ServiceNameEnum.EditCv}/update`,
  async (payload: UpdatePayload) => {
    const metadata = await cvApi.update(payload)
    return metadata
  }
)

export { update }
export type { UpdatePayload }
