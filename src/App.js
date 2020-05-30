import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavbar from './components/MainNavbar';
import Home from './components/Home';
import Team from './components/Team';

import './App.css';

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Home />
      <Team />
    </div>
  );
}

export default App;
