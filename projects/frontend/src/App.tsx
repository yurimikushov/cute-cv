import { FC } from 'react'
import { useSaveCV } from 'services/cv'
import HomePage from 'pages/Home'

const App: FC = () => {
  useSaveCV()

  return <HomePage />
}

export default App
