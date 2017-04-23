import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
// import Games from './Games';
// import Picker from './Picker';
import Standings from './Standings';
// import Tree from './Tree';
import Themes from '../common/themes';

const App = () => (
   <ThemeProvider theme={Themes.PIT}>
      <Switch>
         {/* <Route path="/games" component={Games} />
         <Route path="/tree" component={Tree} /> */}
         {/* {__DEVELOPMENT__ && <Route path="/picker" component={Picker} />} */}
         <Route path="/" component={Standings} />
      </Switch>
   </ThemeProvider>
);

export default App;
