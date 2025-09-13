import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contato</h2>
      <p>Email: Lamborne@example.com</p>
      <p>Telefone: +244 934516545</p>
      <form>
        <input placeholder="Nome" />
        <input placeholder="Email" />
        <textarea placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
