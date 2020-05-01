import React from 'react';
//import logo from './logo.svg';
//import { Login } from './components/Login'
import { Main } from './pages/Main'
//import { BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div id='app'>
        <div class='content'>
        <Main path='/' default />
        </div>
      </div>
);
}

export default App;
