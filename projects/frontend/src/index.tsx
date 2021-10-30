import React from 'react'
import { render } from 'react-dom'
import 'translation/config'
import App from './App'
import './index.css'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('.app')
)
