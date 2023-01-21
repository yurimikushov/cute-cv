import { atom, Ctx, CtxSpy, onUpdate } from '@reatom/framework'
import { getAllCvStore } from '../all-cv-store'

class CurrentCvIdStore {
  private _atom

  constructor() {
    this._atom = this.createDataAtom()
    this.initCurrentCvId()
  }

  public get dataAtom() {
    return this._atom
  }

  public spyCurrentId = (ctx: CtxSpy) => {
    return ctx.spy(this.dataAtom)
  }

  public updateCurrentId = (
    ctx: Ctx,
    id: string,
    publicId: string | null = null
  ) => {
    return this.dataAtom(ctx, { publicId, id })
  }

  private createDataAtom = () => {
    return atom<{ publicId: string | null; id: string } | null>(
      null,
      'currentCvId'
    )
  }

  private initCurrentCvId = () => {
    const { dataAtom: allCvAtom } = getAllCvStore()

    onUpdate(allCvAtom, (ctx) => {
      const { id: currentId } = ctx.get(this.dataAtom) ?? {}

      const allCv = ctx.get(allCvAtom)

      const { publicId, id } = allCv?.[0] ?? {}

      if (!currentId && publicId && id) {
        this.dataAtom(ctx, { publicId, id })
      } else if (
        currentId &&
        allCv.length > 0 &&
        allCv.every(({ id }) => id !== currentId)
      ) {
        const { publicId = null, id } = allCv[allCv.length - 1]
        this.dataAtom(ctx, { publicId, id })
      }
    })
  }
}

export { CurrentCvIdStore }
