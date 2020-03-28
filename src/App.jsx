import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { hot } from 'react-hot-loader'
import { lightTheme } from './themes'
import Layout from './Layout'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <Layout />
    <GlobalStyle />
  </ThemeProvider>
)

export default hot(module)(App)
