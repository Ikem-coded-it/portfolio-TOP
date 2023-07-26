import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/index.jsx'
import { ThemeProvider } from 'styled-components'
import theme from './ThemeProvider/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
)
