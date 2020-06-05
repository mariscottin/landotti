import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavbar from './components/MainNavbar';
import Home from './components/Home';
import Services from './components/Services';
import Stack from './components/Stack';
import Method from './components/Method';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {

  return (
    <div className="App">
      <MainNavbar />
      <Home />
      <Services />
      <Stack />
      <Method />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
