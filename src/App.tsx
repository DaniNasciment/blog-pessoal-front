import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/estaticos/Footer/Footer';
import { Navbar } from './components/estaticos/navbar/Navbar';
import { CadastroUsuario } from './components/paginas/cadastroUsuario/CadastroUsuario';
import { Home } from './components/paginas/home/Home';
import {Login} from './components/paginas/login/Login';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastroUsuario" element={<CadastroUsuario/>} />

      </Routes>
      <Footer />
    </Router>

  );
}


export default App;