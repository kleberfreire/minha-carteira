import React from 'react'
import GlobalStyle from './styles/GlobalStyle'
import Layout from './components/Layout';
import {ThemeProvider} from 'styled-components';
import dark from './styles/themes/dark'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark} >
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  )
}

export default App