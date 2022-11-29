import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/estaticos/Footer/Footer';
import { Navbar } from './components/estaticos/navbar/Navbar';
import { Home } from './components/paginas/home/Home';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;