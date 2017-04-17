import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';
import Games from './Games';
// import Picker from './Picker';
import Standings from './Standings';
import Tree from './Tree';
import Themes from '../common/themes';

const App = () => (
   <ThemeProvider theme={Themes.PIT}>
      <Switch>
         <Redirect exact from="/" to="/standings" />
         <Route path="/games" component={Games} />
         <Route path="/tree" component={Tree} />
         {/* <Route path="/" component={Picker} /> */}
         <Route path="/standings" component={Standings} />
      </Switch>
   </ThemeProvider>
);

export default App;
