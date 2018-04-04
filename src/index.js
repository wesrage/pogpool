import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'
import { ThemeProvider } from 'styled-components'
import './index.html'
import Picker from './pages/Picker/Picker'
import Themes from './common/themes'

const browserHistory = qhistory(createBrowserHistory(), stringify, parse)

const component = (
   <ThemeProvider theme={Themes.PIT}>
      <Router history={browserHistory}>
         <Picker />
      </Router>
   </ThemeProvider>
)

const target = document.getElementById('root')

render(component, target)
