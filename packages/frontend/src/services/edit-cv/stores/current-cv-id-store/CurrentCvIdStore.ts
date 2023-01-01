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

  private createDataAtom = () => {
    return atom<string | null>(null, 'currentCvId')
  }

  private initCurrentCvId = () => {
    const { dataAtom: allCvAtom } = getAllCvStore()

    onUpdate(allCvAtom, (ctx) => {
      const currentId = ctx.get(this.dataAtom)

      const allCv = ctx.get(allCvAtom)

      if (!currentId && allCv && allCv.length > 0) {
        this.dataAtom(ctx, allCv[0].publicId!)
      }
    })
  }

  public spyCurrentId = (ctx: CtxSpy) => {
    return ctx.spy(this.dataAtom)
  }

  public updateCurrentId = (ctx: Ctx, id: string) => {
    return this.dataAtom(ctx, id)
  }
}

export { CurrentCvIdStore }
