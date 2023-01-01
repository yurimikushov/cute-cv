import {
  Ctx,
  CtxSpy,
  parseAtoms,
  plain,
  reatomAsync,
  withAbort,
  withDataAtom,
  withErrorAtom,
  withRetry,
} from '@reatom/framework'
import cvApi from 'shared/api/cv/api'

class AllCvStore {
  private _fetchAction

  constructor() {
    this._fetchAction = this.createFetchAction()
  }

  public get pendingAtom() {
    return this._fetchAction.pendingAtom
  }

  public get retriesAtom() {
    return this._fetchAction.retriesAtom
  }

  public get dataAtom() {
    return this._fetchAction.dataAtom
  }

  public get errorAtom() {
    return this._fetchAction.errorAtom
  }

  public get fetchAction() {
    return this._fetchAction.pipe(plain)
  }

  public spyStoreState = (ctx: CtxSpy) => {
    return {
      isLoading: ctx.spy(this.pendingAtom) + ctx.spy(this.retriesAtom) > 0,
      data: parseAtoms(ctx, ctx.spy(this.dataAtom)),
      dataAtom: this.dataAtom,
      error: ctx.spy(this.errorAtom),
    }
  }

  public isFetchNeeded = (ctx: Ctx) => {
    return (
      ctx.get(this.dataAtom) === undefined &&
      ctx.get(this.pendingAtom) + ctx.get(this.retriesAtom) === 0
    )
  }

  private createFetchAction = () => {
    return reatomAsync(async (ctx) => {
      return (await cvApi.loadAll(ctx.controller))
        .map((metadata) => ({
          ...metadata,
          isNew: false,
          isSaved: true,
        }))
        .sort((a, b) => a.number - b.number)
    }, 'allCv').pipe(
      withDataAtom(undefined),
      withErrorAtom(),
      withAbort({ strategy: 'last-in-win' }),
      withRetry({
        onReject: (_ctx, _error, retries) => {
          // eslint-disable-next-line no-mixed-operators
          return retries < 4 ? Math.min(500, 100 * retries ** 2) : -1
        },
      })
    )
  }
}

export { AllCvStore }
