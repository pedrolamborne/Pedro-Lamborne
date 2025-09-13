import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <h1>Pedro Lamborne</h1>
        <p>Desenvolvedor fullstack especializado em criar soluções web e mobile modernas, rápidas e escaláveis.</p>
        <div>
          <button className="btn">Solicitar orçamento</button>
          <button className="btn btn-outline">Saiba mais</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://via.placeholder.com/400x400.png?text=Foto" alt="Francisco Diakomas" />
      </div>
    </section>
  );
}
