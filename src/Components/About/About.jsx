import style from './About.module.css';
import imageProfile from '../../Assets/nacho.png';

import react from '../../Assets/tecnologiasSVG/react-icon.svg';
import html from '../../Assets/tecnologiasSVG/html-icon.svg';
import css from '../../Assets/tecnologiasSVG/css-icon.svg';
import redux from '../../Assets/tecnologiasSVG/redux-icon.svg';

import typescript from '../../Assets/tecnologias/type.png';
import javascript from '../../Assets/tecnologias/javas.png';
import nextjs from '../../Assets/tecnologias/nextjs.png';
import axios from '../../Assets/tecnologias/axios.png';
import materialUI from '../../Assets/tecnologiasSVG/materialui-icon.svg';

import nodeJs from '../../Assets/tecnologiasSVG/node-icon.svg';
import express from '../../Assets/tecnologiasSVG/express-icon.svg';
import mongoose from '../../Assets/tecnologiasSVG/Mongoose.svg';
import JWT from '../../Assets/tecnologiasSVG/JWT.svg';
import Bcrypt from '../../Assets/tecnologiasSVG/Bcrypt.svg';
import NodeEmailer from '../../Assets/tecnologiasSVG/NodeEmailer.svg';
import sequelize from '../../Assets/tecnologiasSVG/Sequelize.svg';

import mongoDb from '../../Assets/tecnologiasSVG/mongodb-icons.svg';
import sql from '../../Assets/tecnologiasSVG/mysql-icon.svg';
import postgrest from '../../Assets/tecnologiasSVG/postgrestSQL.svg';
import Firebase from '../../Assets/tecnologiasSVG/FireBase.svg';

const About = () => {
  return (
    <div className={style.contain} id="about">

      <div className={style.textAndImage}>
        <div className={style.text}>
          <p className={style.title}>Sobre mi</p>
          <p data-aos="fade-right" data-aos-duration="1500">
            Mi nombre es Ignacio Nicoletti, soy técnico informático con una gran pasión por la programación. Me fascina entregar soluciones que agreguen valor a la vida de las personas y al mismo tiempo me desafíen. Mejoré mis habilidades como desarrollador Front-End y Back-End.
          </p>
          <p data-aos="fade-right" data-aos-duration="1500">
            Desde chico siempre me gustó la programación lo cual siempre tengo motivación para perfeccionar mis habilidades y aprender nuevas tecnologías. Me egresé del Bootcamp SoyHenry, obteniendo como logro que el proyecto grupal sea considerado uno de los mejores entre las dos cohortes.
          </p>
          <p data-aos="fade-right" data-aos-duration="1500">
            Soy una persona dedicada que persigue hacer realidad sus sueños, trabajadora y orientada a resultados, busco siempre alcanzar mi mejor versión sin importar las dificultades.
          </p>

        </div>
        <div
          className={style.image}
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <img src={imageProfile} alt="" />
        </div>
      </div>

      <div className={style.ability}>
        <p className={style.title}>Mis principales tecnologías</p>
        <div className={style.grilla}>

          <div className={style.tecnologies}>

            <h3>Frontend</h3>
            <div className={style.iconTecnologies}>
              <a
                href="https://developer.mozilla.org/es/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={html} alt="HTML" />
              </a>

              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={css} alt="CSS" />
              </a>

              <a
                href="https://es.react.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={react} alt="ReactJS" />
              </a>

              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={nextjs} alt="NextJS" />
              </a>

              <a
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={redux} alt="Redux" />
              </a>

              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={typescript} alt="Typescript" />
              </a>

              <a
                href="https://developer.mozilla.org/es/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={javascript} alt="JavaScript" />
              </a>

              <a
                href="https://axios-http.com/es/docs/intro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={axios} alt="Axios" />
              </a>

              <a
                href="https://mui.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={materialUI} alt="MaterialUi" />
              </a>
            </div>
          </div>

          <div className={style.tecnologies}>
            <h3>Backend</h3>
            <div className={style.iconTecnologies}>
              <a
                href="https://nodejs.org/es"
                target="_blank"
                rel="noopener noreferrer"
              >

                <img src={nodeJs} alt="NodeJS" />
              </a>
              <a
                href="https://expressjs.com/es/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={express} alt="ExpressJS" />{' '}
              </a>
              <a
                href="https://mongoosejs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mongoose} alt="Mongoose" />
              </a>
              <a
                href="https://jwt.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={JWT} alt="Jason Web Token" />{' '}
              </a>
              <a
                href="https://www.npmjs.com/package/bcrypt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Bcrypt} alt="BCrypt" />
              </a>
              <a
                href="https://sequelize.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={sequelize} alt="Sequelize" />
              </a>
              <a
                href="https://nodemailer.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={NodeEmailer} alt="NodeEmailer" />
              </a>
            </div>
          </div>

          <div className={style.tecnologies}>
            <h3>Base de Datos</h3>
            <div className={style.iconTecnologies}>
              <img src={mongoDb} alt="MongoDB" />
              <img src={sql} alt="MySQLDB" />
              <img src={postgrest} alt="PostGrestDB" />
              <img src={Firebase} alt="FireBaseDB" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
