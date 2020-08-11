import React from 'react'
import { render } from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import './index.html'
import Themes from './common/themes'
import Spinner from './components/Spinner'

// const Picker = React.lazy(() => import('./pages/Picker/Picker'))
const Standings = React.lazy(() => import('./pages/Standings/Standings'))

const FullScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const component = (
  <ThemeProvider theme={Themes.STL}>
    <React.Suspense
      fallback={
        <FullScreenContainer>
          <Spinner />
        </FullScreenContainer>
      }
    >
      <Standings />
      {/* <Picker /> */}
    </React.Suspense>
  </ThemeProvider>
)

const target = document.getElementById('root')

render(component, target)
