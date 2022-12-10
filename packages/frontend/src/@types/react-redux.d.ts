import store from 'services/store'

declare module 'react-redux' {
  // eslint-disable-next-line init-declarations
  export declare const useDispatch: () => typeof store.dispatch
}
