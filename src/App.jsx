import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { hot } from 'react-hot-loader'
import 'typeface-poppins'
import DigitalClock from './assets/DigitalClock.woff'
import { lightTheme } from './themes'
import Layout from './Layout'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Digital Clock';
    src: url('${DigitalClock}') format('woff');
    font-weight: normal;
    font-style: normal;
  }


  body {
    height: 100vh;
    padding: 0;
    margin: 0;
    background: #d4dfee;
    color: #31456a;
    font-family: 'Poppins', sans-serif;
  }

  * {
    box-sizing: border-box;
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 1em;
    -webkit-user-select:none;
  }

  h1,
  h2,
  h3 {
    font-weight: 600;
  }

  h1 {
    font-size: 28px;
    text-align: center;
  }

  h4,
  h5 {
    color: #7888a3;
    font-weight: 400;
  }

  h4 {
    font-size: 20px;
  }
`

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <Layout />
  </ThemeProvider>
)

export default hot(module)(App)
