import React from 'react'
import ReactDOM from 'react-dom/client'
import Principal from './Principal'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
  <React.StrictMode>
    <Principal />
  </React.StrictMode>
  <GlobalStyles/>
  </>
)
