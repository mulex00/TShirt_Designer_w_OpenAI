import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Designer from './components/pages/Designer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Designer}/>
        </Routes>
        <Footer/>
     </Router>
    </div>
  );
}

export default App;
