// import logo from './logo.svg';
//import './App.css';




/*function App() {
  return (
    <div className="App">
     Louzi Amine
    </div>
  );
}

export default App;*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './pages/Home';
//import About from './pages/About';

import AboutGenerale from './pages/AboutGenerale';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutGenerale />} />
      </Routes>
    </Router>
  );
};

export default App;

