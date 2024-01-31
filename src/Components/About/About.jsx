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
import sqlserver from '../../Assets/tecnologiasSVG/SQLserver.svg';

import certSQL from '../../Assets/certifications/certificado-sql.png';
import certgithub from '../../Assets/certifications/certificado-github.png';
import certHenry from '../../Assets/certifications/certificado-henry.png';
import certcode from '../../Assets/certifications/certificado.jpg';
import certHTML from '../../Assets/certifications/HTML_educacionIT.png';
import certintProgramacion from '../../Assets/certifications/Certificado-Introducción-a-la-Programación.png';
const About = ({lenguageEN}) => {
  return (
    <div>

      {lenguageEN === false
        ? <div className={style.contain} id="about">

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

            <div className={style.certifications}>
              <p className={style.title}>Mis certificaciones</p>
              <div className={style.certifications_img}>
                <img src={certintProgramacion} alt="certificado HMTL" />
                <img src={certHTML} alt="certificado HMTL" />
                <img src={certSQL} alt="certificado SQL" />
                <img src={certgithub} alt="certificado de github" />
                <img src={certHenry} alt="certificado de henry" />
                <img src={certcode} alt="certificado code" />
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
                    <a
                      href="https://www.mongodb.com/es"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={mongoDb} alt="MongoDB" />
                    </a>
                    <a
                      href="https://www.mysql.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <img src={sql} alt="MySQLDB" />{' '}
                    </a>
                    <a
                      href="https://www.postgresql.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={postgrest} alt="PostGrestDB" />
                    </a>
                    <a
                      href="https://firebase.google.com/?hl=es"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Firebase} alt="FireBaseDB" />
                    </a>
                    <a
                      href="https://www.microsoft.com/es-es/sql-server"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={sqlserver} alt="sqlserver" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        : <div className={style.contain} id="about">

            <div className={style.textAndImage}>
              <div className={style.text}>
                <p className={style.title}>About me</p>
                <p data-aos="fade-right" data-aos-duration="1500">
                  My name is Ignacio Nicoletti, I am a computer technician with a great passion for programming. I am fascinated by delivering solutions that add value to people's lives while challenging me at the same time. I have improved my skills as a Front-End and Back-End developer.
                </p>
                <p data-aos="fade-right" data-aos-duration="1500">
                  Since I was a child, I have always liked programming, which is why I am always motivated to improve my skills and learn new technologies. I graduated from the SoyHenry Bootcamp, achieving the accomplishment of having the group project considered one of the best among the two cohorts.
                  {' '}
                </p>
                <p data-aos="fade-right" data-aos-duration="1500">
                  I am a dedicated person who strives to make their dreams come true, hardworking and results-oriented. I always seek to reach my best version regardless of the difficulties.
                  {' '}
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
            <div className={style.certifications}>
              <p className={style.title}>
                My Certifications
              </p>
              <div className={style.certifications_img}>
                <img src={certintProgramacion} alt="certificado HMTL" />
                <img src={certHTML} alt="certificado HMTL" />
                <img src={certSQL} alt="certificado SQL" />
                <img src={certgithub} alt="certificado de github" />
                <img src={certHenry} alt="certificado de henry" />
                <img src={certcode} alt="certificado code" />
              </div>

            </div>
            <div className={style.ability}>
              <p className={style.title}>My main technologies</p>
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
                      <img src={JWT} alt="Jason Web Token" />
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
                  <h3>Database</h3>
                  <div className={style.iconTecnologies}>
                    <a
                      href="https://www.mongodb.com/es"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={mongoDb} alt="MongoDB" />
                    </a>
                    <a
                      href="https://www.mysql.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <img src={sql} alt="MySQLDB" />{' '}
                    </a>
                    <a
                      href="https://www.postgresql.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={postgrest} alt="PostGrestDB" />
                    </a>
                    <a
                      href="https://firebase.google.com/?hl=es"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Firebase} alt="FireBaseDB" />
                    </a>
                    <a
                      href="https://www.microsoft.com/es-es/sql-server"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={sqlserver} alt="sqlserver" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>}
    </div>
  );
};
export default About;
