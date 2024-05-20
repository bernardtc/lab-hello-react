// src/App.js
import React from 'react';
import './App.css'; // Importar um arquivo CSS para estilos

// Importe suas imagens
import logo from '../src/images/logo.png'; // Substitua pelo caminho correto das suas imagens
import pc from '../src/images/pc.png';
import video from '../src/images/play.png';
import codigo from '../src/images/codigo.png';
import traços from '../src/images/traços.png';
import ferramenta from '../src/images/ferramenta.png';

const App = () => {
  return (
    <div className="landing-page">
      <header className="header">
      </header>
      <section className="banner">
      <navbar>
      <img src={logo} alt="Logo" className="logo" />
      <img src={traços} alt="Tracos" className="traco" />
      </navbar>
      <h1>Say Hello to React!</h1>
      </section>
      <section className="features" id="features">
        <div className="feature">
          <img src={pc} alt="Feature 1" />
          <h3>Declarative</h3>
        </div>
        <div className="feature">
          <img src={video} alt="Feature 2" />
          <h3>Components</h3>
        </div>
        <div className="feature">
          <img src={codigo} alt="Feature 3" />
          <h3>Single Way</h3>
        </div>
        <div className="feature">
          <img src={ferramenta} alt="Feature 3" />
          <h3>JSX</h3>
        </div>
      </section>
    </div>
  );
};

export default App;

