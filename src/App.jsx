import React from 'react';
import {Route} from 'react-router-dom';

import MainViewContainer from './components/main_view_container';

// Styles
import './styles/base.css';

const App = ({children}) => (
  <div className="App">
    <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet" />
    <Route path="/" component={MainViewContainer} />
  </div>
);

export default App;
