import { FC } from 'react'
import { reatomContext } from '@reatom/npm-react'
import ctx from './ctx'

const ReatomProvider: FC = ({ children }) => {
  return <reatomContext.Provider value={ctx}>{children}</reatomContext.Provider>
}

export default ReatomProvider
