import cvApi from 'api/cv'

type Cv = Awaited<ReturnType<typeof cvApi.loadSharable>>

export type { Cv }
