import { createAsyncThunk } from '@reduxjs/toolkit'
import cvApi from 'api/cv'
import { ServiceNameEnum } from 'services'
import { PatchPayload } from './model'

const patch = createAsyncThunk(
  `${ServiceNameEnum.EditCv}/patch`,
  async (payload: PatchPayload) => {
    const metadata = await cvApi.patch(payload)
    return metadata
  }
)

type PatchResult = NonNullable<Awaited<ReturnType<typeof cvApi.patch>>>

export { patch }
export type { PatchResult }
