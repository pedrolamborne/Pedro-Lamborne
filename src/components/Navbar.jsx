import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">FD</div>
      <ul>
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <button className="btn">Vamos falar</button>
    </nav>
  );
}
