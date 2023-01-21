import {
  atom,
  Ctx,
  CtxSpy,
  parseAtoms,
  plain,
  reatomAsync,
  withAbort,
  withErrorAtom,
  withRetry,
} from '@reatom/framework'
import { nanoid } from 'nanoid'
import cvApi from 'shared/api/cv/api'
import { CV_VERSIONS_MAX_COUNT } from './constants'

class AllCvStore {
  private _dataAtom
  private _loadAllCvAction
  private _deleteCvAction

  constructor() {
    this._dataAtom = this.createDataAtom()
    this._loadAllCvAction = this.createLoadAllCvAction()
    this._deleteCvAction = this.createDeleteCvAction()
  }

  public get dataAtom() {
    return this._dataAtom
  }

  public get errorAtom() {
    return this._loadAllCvAction.errorAtom
  }

  private get loadAllCvAction() {
    return this._loadAllCvAction.pipe(plain)
  }

  private get deleteCvAction() {
    return this._deleteCvAction.pipe(plain)
  }

  public spyStoreState = (ctx: CtxSpy) => {
    return {
      isLoading:
        ctx.spy(this._loadAllCvAction.pendingAtom) +
          ctx.spy(this._loadAllCvAction.retriesAtom) >
        0,
      data: parseAtoms(ctx, ctx.spy(this.dataAtom)),
      dataAtom: this.dataAtom,
      error: ctx.spy(this.errorAtom),
    }
  }

  public isLoadNeeded = (ctx: Ctx) => {
    return (
      ctx.get(this._loadAllCvAction.pendingAtom) +
        ctx.get(this._loadAllCvAction.retriesAtom) ===
      0
    )
  }

  public loadAllCv = (ctx: Ctx) => {
    return this.loadAllCvAction(ctx)
  }

  public spyIsLoading = (ctx: CtxSpy) => {
    return (
      ctx.spy(this._loadAllCvAction.pendingAtom) +
        ctx.spy(this._loadAllCvAction.retriesAtom) >
      0
    )
  }

  public spyAllCv = (ctx: CtxSpy) => {
    return parseAtoms(ctx, ctx.spy(this.dataAtom))
  }

  public spyLoadingError = (ctx: CtxSpy) => {
    return ctx.spy(this._loadAllCvAction.errorAtom)
  }

  public addCv = (ctx: Ctx, name: string, allowShare: boolean) => {
    const allCv = ctx.get(this.dataAtom) ?? []
    const cvCount = allCv.length

    if (cvCount >= CV_VERSIONS_MAX_COUNT) {
      throw new Error(
        `You already have ${cvCount} cv versions.
        ${CV_VERSIONS_MAX_COUNT} is maximum available number of cv versions`
      )
    }

    const id = nanoid()
    const number = Math.max(...allCv.map(({ number }) => number)) + 1

    this.dataAtom(ctx, (allCv = []) => {
      return [
        ...allCv,
        {
          publicId: undefined,
          id,
          name,
          number,
          allowShare,
          isNew: true,
          isSaved: false,
          savedAt: null,
        },
      ]
    })

    return {
      id,
      number,
    }
  }

  public deleteCv = (ctx: Ctx, id: string) => {
    return this.deleteCvAction(ctx, id)
  }

  public spyIsDeleting = (ctx: CtxSpy) => {
    return ctx.spy(this._deleteCvAction.pendingAtom) > 0
  }

  public spyDeleteError = (ctx: CtxSpy) => {
    return ctx.spy(this._deleteCvAction.errorAtom)
  }

  private createDataAtom = () => {
    return atom<
      Array<{
        publicId: string | undefined
        id: string
        name: string
        number: number
        isNew: boolean
        isSaved: boolean
        savedAt: Date | null
        allowShare: boolean
      }>
    >([], 'allCv')
  }

  private createLoadAllCvAction = () => {
    return reatomAsync(
      async (ctx) => {
        const allCv = await cvApi.loadAll(ctx.controller)
        return allCv
      },
      {
        name: 'loadAllCv',
        onFulfill: (ctx, allCv) => {
          this.dataAtom(
            ctx,
            allCv
              .map((metadata) => ({
                ...metadata,
                isNew: false,
                isSaved: true,
              }))
              .sort((a, b) => a.number - b.number)
          )
        },
      }
    ).pipe(
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

  private createDeleteCvAction = () => {
    return reatomAsync(async (ctx, id: string) => {
      const cv = ctx.get(this.dataAtom).find((cv) => cv.id === id)

      if (cv?.publicId) {
        await cvApi.delete(cv.publicId)
      }

      this.dataAtom(ctx, (allCv) => {
        return allCv.filter((cv) => cv.id !== id)
      })
    }, 'deleteAllCv').pipe(withErrorAtom())
  }
}

export { AllCvStore }
