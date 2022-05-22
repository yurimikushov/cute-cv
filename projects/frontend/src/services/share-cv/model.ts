import cvApi from 'shared/api/cv'

type Cv = Awaited<ReturnType<typeof cvApi.loadSharable>>

export type { Cv }
