import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Redirect, Route } from 'react-router-dom';
// import Picker from './Picker';
import Standings from './Standings';
import Tree from './Tree';
import Themes from '../common/themes';

const App = () => (
   <ThemeProvider theme={Themes.PIT}>
      <div>
         <Redirect from="/" to="/standings"/>
         <Route path="/tree" component={Tree} />
         {/* <Route path="/" component={Picker} /> */}
         <Route path="/standings" component={Standings} />
      </div>
   </ThemeProvider>
);

export default App;
