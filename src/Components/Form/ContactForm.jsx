import React from 'react';
// import emailjs from '@emailjs/browser';
import style from './ContactForm.module.css';
import WhatsApp from '../../Assets/WhatsApp.svg2.png';
export const ContactForm = () => {
  const sendEmail = e => {
    e.preventDefault ();

    // emailjs
    //   .sendForm(
    //     'service_ktcuaoa',
    //     'template_86g30y2',
    //     'form',
    //     'lG-IY0qMT-QWXTTAt',
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     },
    //   );
  };

  return (
    <div className={style.contain} id='contact'>
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
      <form onSubmit={sendEmail}>
        <h2>Completa el formulario para enviarme un correo.</h2>
        <label>Nombre</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Mensaje</label>
        <textarea name="message" />
        <button type="submit" value="Enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};
