import React from 'react';
import { Route } from 'react-router-dom';
import Picker from './Picker';
import Tree from './Tree';

const App = () => (
   <div>
      <Route path="/" component={Tree} />
      <Route path="/picker" component={Picker} />
   </div>
);

export default App;
