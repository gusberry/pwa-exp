import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';

import('./services/registerServiceWorker').then(module => module.default());

ReactDOM.render(<App />, document.getElementById('root'));
