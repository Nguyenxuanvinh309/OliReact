import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js';
// import 'popper.js/dist/popper.min.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
