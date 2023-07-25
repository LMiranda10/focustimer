import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global.js'
import { ThemeProvider } from 'styled-components'

import {App} from './home/'
import theme from './styles/theme.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
)
