import React from 'react';
import {Route} from 'react-router-dom';

import MainView from './components/main_view';

const App = ({children}) => (
  <div className="App">
    <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet"/>
    <Route path="/" component={MainView} />
  </div>
);

export default App;
