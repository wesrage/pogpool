import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Standings from './Standings';
import Picker from './Picker';
import Themes from '../common/themes';

const App = () => (
   <ThemeProvider theme={Themes.PIT}>
      <Router>
         <div>
            <Route exact path="/" component={Standings}/>
            <Route exact path="/picker" component={Picker}/>
         </div>
      </Router>
   </ThemeProvider>
);

export default App;
