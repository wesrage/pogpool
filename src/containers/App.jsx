import React from 'react';
import { ThemeProvider } from 'styled-components';
import Standings from './Standings';
import Themes from '../common/themes';

const App = () => (
   <ThemeProvider theme={Themes.PIT}>
      <Standings/>
   </ThemeProvider>
);

export default App;
