import React, { useState } from 'react';
import style from './ContactForm.module.css';
import WhatsApp from '../../Assets/WhatsApp.svg2.png';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const [nombre, setNombre] = useState ('');
  const [email, setEmail] = useState ('');
  const [message, setMessage] = useState (null);

  let templateParams = {
    user_name: nombre,
    user_email: email,
    user_message: message,
  };

  const handleSubmit = e => {
    e.preventDefault ();

    emailjs
      .sendForm (
        'service_ktcuaoa',
        'template_86g30y2',
        'form',
        'lG-IY0qMT-QWXTTAt'
      )
      .then (
        result => {
          console.log (result.text);
        },
        error => {
          console.log (error.text);
        }
      );
  };

  return (
    <div className={style.contain} id="contact">
      <div className={style.textForm}>

        <h2>Ponte en contacto conmigo</h2>
        <p>Puedes enviarme un correo o escribirme a mi número telefónico.</p>

        <a
          href="https://api.whatsapp.com/send?phone=%2B5492213195893&text="
          target="_blank"
          rel="noreferrer"
        >
          <div className={style.contacts}>

            <img src={WhatsApp} alt="mensaje" />
            (+54) 221 319-5893

          </div>
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Completa el formulario para enviarme un correo.</h2>
        <label htmlFor="toggle">Nombre</label>
        <input
          type="text"
          value={nombre}
          name="user_name"
          placeholder="Nombre y apellido "
          onChange={e => setNombre (e.target.value)}
        />
        <label htmlFor="toggle">Email</label>
        <input
          type="email"
          value={email}
          name="user_email"
          placeholder="email"
          onChange={e => setEmail (e.target.value)}
        />
        <label htmlFor="toggle">Mensaje</label>
        <textarea name="message" />
        <button type="submit" value="Enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};
