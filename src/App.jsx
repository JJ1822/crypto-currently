import React from 'react';
import {Route} from 'react-router-dom';

import MainView from './components/main_view';

const App = ({children}) => (
  <div className="App">
    <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet" />
    <link rel="stylesheet" href="./styles/main-view-styles.css" />
    <Route path="/" component={MainView} />
  </div>
);

export default App;
