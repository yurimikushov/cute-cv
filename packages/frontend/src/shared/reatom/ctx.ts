import { createCtx, connectLogger } from '@reatom/framework'

const ctx = createCtx()

connectLogger(ctx)

export default ctx
