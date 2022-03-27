import { atom } from 'nanostores'
import { Cv } from './model'

const isLoadingAtom = atom(false)
const cvAtom = atom<Cv | null>(null)
const loadingErrorAtom = atom<Error | null>(null)

const startLoading = () => {
  isLoadingAtom.set(true)
  loadingErrorAtom.set(null)
}

const loadingSuccess = (cv: Cv) => {
  isLoadingAtom.set(false)
  cvAtom.set(cv)
}

const loadingFail = (error: Error) => {
  isLoadingAtom.set(false)
  loadingErrorAtom.set(error)
}

export {
  isLoadingAtom,
  cvAtom,
  loadingErrorAtom,
  startLoading,
  loadingSuccess,
  loadingFail,
}
