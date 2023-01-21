import { atom, Ctx, CtxSpy, onConnect, onUpdate } from '@reatom/framework'

const LOCAL_STORAGE_KEY = 'persist:edit-cv/editable'

class EditableStore {
  private _atom

  constructor() {
    this._atom = this.createDataAtom()
    this.persistEditable()
  }

  public get dataAtom() {
    return this._atom
  }

  public spyEditable = (ctx: CtxSpy) => {
    return ctx.spy(this.dataAtom)
  }

  public toggleEditable = (ctx: Ctx) => {
    return this.dataAtom(ctx, (editable) => !editable)
  }

  private createDataAtom = () => {
    return atom(this.getPersistedEditable(), 'editable')
  }

  private getPersistedEditable = (fallbackEditable = false) => {
    const persistEditable = localStorage.getItem(LOCAL_STORAGE_KEY)

    return (persistEditable ?? String(fallbackEditable)) === String(true)
  }

  private persistEditable = () => {
    onConnect(this.dataAtom, (ctx) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, String(ctx.get(this.dataAtom)))
    })

    onUpdate(this.dataAtom, (ctx) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, String(ctx.get(this.dataAtom)))
    })
  }
}

export { EditableStore }
