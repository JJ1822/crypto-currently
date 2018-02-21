import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';

ReactDOM.render(<Root store={configureStore()}/>, document.getElementById('root'));
registerServiceWorker();
