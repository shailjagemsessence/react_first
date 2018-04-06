import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './components/SignUp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SignUp />, document.getElementById('root'));
registerServiceWorker();
