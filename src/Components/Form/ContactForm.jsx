import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import style from './ContactForm.module.css';
import WhatsApp from '../../Assets/WhatsApp.svg2.png';
export const ContactForm = () => {
  const [nombre, setNombre] = useState ('');
  const [email, setEmail] = useState ('');
  const [message, setMessage] = useState ();

  var templateParams = {
    user_name: nombre,
    user_message: message,
    user_email: email,
  };

  const sendEmail = e => {
    e.preventDefault ();
    if (
      templateParams.user_name !== '' &&
      templateParams.user_message !== '' &&
      templateParams.user_email !== ''
    ) {
      emailjs
        .send (
          'service_ktcuaoa',
          'template_86g30y2',
          {templateParams},
          'lG-IY0qMT-QWXTTAt'
        )
        .then (
          function (response) {
            console.log ('SUCCESS!', response.status, response.text);
          },
          function (error) {
            console.log ('FAILED...', error);
          }
        );}else{
          console.log("error al enviar ");
        }
    
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
      <form onSubmit={sendEmail}>
        <h2>Completa el formulario para enviarme un correo.</h2>
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          name="nombre"
          placeholder="Nombre y apellido "
          onChange={e => setNombre (e.target.value)}
        /> 
         <label>Email</label>
        <input
          type="email"
          value={email}
          name="user_emai"
          placeholder="email"
          onChange={e => setEmail (e.target.value)}
        /> 
        <label>Mensaje</label>
        <input
          name="message"
          value={message}
          onChange={e => setMessage (e.target.value)}
        />
        <button type="submit" value="Enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};
