import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './pages/app';
import Login from './pages/login';
import MyRouter from './router';


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<MyRouter />, document.getElementById('root'));

