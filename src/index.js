import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import GlobalStyle from './GlobalStyle'
import App from './App'

import 'reset-css'

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.querySelector('#root')
)
