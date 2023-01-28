import {
  atom,
  Ctx,
  CtxSpy,
  onUpdate,
  parseAtoms,
  plain,
  reatomAsync,
  withAbort,
  withErrorAtom,
  withRetry,
} from '@reatom/framework'
import { nanoid } from 'nanoid'
import cvApi from 'shared/api/cv/api'
import { CvStore } from '../cv/CvStore'
import { CV_VERSIONS_MAX_COUNT } from './constants'

class AllCvStore {
  private _currentIdAtom
  private _dataAtom

  private _loadAllCvAction
  private _deleteCvAction

  constructor() {
    const id = nanoid()
    this._currentIdAtom = this.createCurrentIdAtom(id)
    this._dataAtom = this.createDataAtom(id)
    this._loadAllCvAction = this.createLoadAllCvAction()
    this._deleteCvAction = this.createDeleteCvAction()

    this.initCurrentCvId()
  }

  public get currentIdAtom() {
    return this._currentIdAtom
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
    return ctx.spy(this.dataAtom).map((cvStore) => {
      return ctx.spy(ctx.get(cvStore.dataAtom).metadata)
    })
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

    const number =
      Math.max(
        ...allCv.map(
          (cvStore) => ctx.get(ctx.get(cvStore.dataAtom).metadata).number
        )
      ) + 1

    this.dataAtom(ctx, (allCv = []) => {
      return [
        ...allCv,
        new CvStore(id, {
          publicId: undefined,
          id,
          name,
          number,
          allowShare,
          isNew: true,
          isSaved: false,
          savedAt: null,
        }),
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

  private createCurrentIdAtom = (id: string) => {
    return atom(id, 'currentId')
  }

  public spyCurrentId = (ctx: CtxSpy) => {
    return ctx.spy(this.currentIdAtom)
  }

  private initCurrentCvId = () => {
    onUpdate(this.dataAtom, (ctx) => {
      const currentId = ctx.get(this.currentIdAtom) ?? {}

      const allCv = ctx.get(this.dataAtom)

      const currentCvStore = allCv?.[0]

      if (!currentCvStore) {
        return
      }

      const { publicId, id } = ctx.get(
        ctx.get(currentCvStore.dataAtom).metadata
      )

      if (!currentId && publicId && id) {
        this.updateCurrentId(ctx, id)
      } else if (
        currentId &&
        allCv.length > 0 &&
        allCv.every(
          (cvStore) =>
            ctx.get(ctx.get(cvStore.dataAtom).metadata).id !== currentId
        )
      ) {
        const { id } = ctx.get(
          ctx.get(allCv[allCv.length - 1].dataAtom).metadata
        )

        this.updateCurrentId(ctx, id)
      }
    })
  }

  public updateCurrentId = (ctx: Ctx, id: string) => {
    return this.currentIdAtom(ctx, id)
  }

  private createDataAtom = (id: string) => {
    return atom<Array<CvStore>>([new CvStore(id)], 'allCv')
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
              .map((metadata) => new CvStore(metadata.id, metadata))
              .sort(
                (a, b) =>
                  ctx.get(ctx.get(a.dataAtom).metadata).number -
                  ctx.get(ctx.get(b.dataAtom).metadata).number
              )
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
      const cvStore = ctx
        .get(this.dataAtom)
        .find(
          (cvStore) => ctx.get(ctx.get(cvStore.dataAtom).metadata).id === id
        )

      if (!cvStore) {
        return
      }

      const { publicId } = ctx.get(ctx.get(cvStore.dataAtom).metadata)

      if (publicId) {
        await cvStore.deleteCv(ctx)
      }

      this.dataAtom(ctx, (allCv) => {
        return allCv.filter(
          (cvStore) => ctx.get(ctx.get(cvStore.dataAtom).metadata).id !== id
        )
      })
    }, 'deleteCv').pipe(withErrorAtom())
  }
}

export { AllCvStore }
