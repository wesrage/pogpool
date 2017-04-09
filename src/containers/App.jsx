import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route } from 'react-router-dom';
import Picker from './Picker';
import Tree from './Tree';
import Themes from '../common/themes';

const App = () => (
   <ThemeProvider theme={Themes.PIT}>
      <div>
         <Route path="/" component={Tree} />
         <Route path="/" component={Picker} />
      </div>
   </ThemeProvider>
);

export default App;
