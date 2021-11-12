import { FC } from 'react'
import { useLoadCV, useSaveCV } from 'services/cv'
import HomePage from 'pages/Home'

const App: FC = () => {
  useLoadCV()
  useSaveCV()

  return <HomePage />
}

export default App
