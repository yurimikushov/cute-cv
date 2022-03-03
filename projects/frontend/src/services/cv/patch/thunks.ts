import { createAsyncThunk } from '@reduxjs/toolkit'
import cvApi from 'api/cv'
import { ServiceNameEnum } from 'services'
import { PatchPayload } from './model'

const patch = createAsyncThunk(
  `${ServiceNameEnum.cv}/patch`,
  async ({ id, name, number, cv }: PatchPayload) => {
    const metadata = await cvApi.patch({ id, name, number, cv })
    return metadata
  }
)

type PatchResult = NonNullable<Awaited<ReturnType<typeof cvApi.patch>>>

export { patch }
export type { PatchResult }
