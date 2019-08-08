import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Navigation />
      <h1 className="display-1">Dezerio!</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="navbar navbar-dark bg-dark">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>  
      </header>
    </div>
  );
}

export default App; 

/* ACLARACIONES GENRALES SOBRE EL APRENDIZAJE DE REACT: */

/* Recordemos que en React solo podemos renderizar un Elemento, por eso en éste ejemplo 
tooooodo esta encerrado en la etiqueta Header */
