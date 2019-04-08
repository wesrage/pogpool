import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import './index.html'
import Picker from './pages/Picker/Picker'
import Standings from './pages/Standings/Standings'
import Themes from './common/themes'


const component = (
  <ThemeProvider theme={Themes.WSH}>
    {/* <Standings /> */}
    <Picker />
  </ThemeProvider>
)

const target = document.getElementById('root')

render(component, target)
