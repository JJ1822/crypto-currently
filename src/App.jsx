import React from 'react';
import {Route} from 'react-router-dom';

import MainViewContainer from './components/main_view_container';

// Styles
import './styles/base.css';

const App = ({children}) => (
  <div className="App">
    <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:200,400" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Gruppo" rel="stylesheet"/> 
    <Route path="/" component={MainViewContainer} />
  </div>
);

export default App;
