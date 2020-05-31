import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavbar from './components/MainNavbar';
import Home from './components/Home';
import Team from './components/Team';
import Stack from './components/Stack';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Home />
      <Team />
      <Stack />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
