import style from './About.module.css';
import imageProfile from '../../Assets/nacho.png';

import react from '../../Assets/tecnologiasSVG/frontend/react-icon.svg';

import css from '../../Assets/tecnologiasSVG/frontend/css-icon.svg';
import redux from '../../Assets/tecnologiasSVG/frontend/redux-icon.svg';
import typescript from '../../Assets/tecnologiasSVG/frontend/type.png';
import javascript from '../../Assets/tecnologiasSVG/frontend/javas.png';
import nextjs from '../../Assets/tecnologiasSVG/frontend/nextjs.png';
import csharp from '../../Assets/tecnologiasSVG/frontend/Csharp.svg';

import nodeJs from '../../Assets/tecnologiasSVG/backend/node-icon.svg';
import express from '../../Assets/tecnologiasSVG/backend/express-icon.svg';
// import mongoose from '../../Assets/tecnologiasSVG/backend/Mongoose.svg';
import JWT from '../../Assets/tecnologiasSVG/backend/JWT.svg';
import Bcrypt from '../../Assets/tecnologiasSVG/backend/Bcrypt.svg';
import NodeEmailer from '../../Assets/tecnologiasSVG/backend/NodeEmailer.svg';
// import sequelize from '../../Assets/tecnologiasSVG/backend/Sequelize.svg';
import Net from '../../Assets/tecnologiasSVG/backend/net.svg';

import mongoDb from '../../Assets/tecnologiasSVG/database/mongodb-icons.svg';
import sql from '../../Assets/tecnologiasSVG/database/mysql-icon.svg';
import postgrest from '../../Assets/tecnologiasSVG/database/postgrestSQL.svg';
import Firebase from '../../Assets/tecnologiasSVG/database/FireBase.svg';
import sqlserver from '../../Assets/tecnologiasSVG/database/SQLserver.svg';

import canva from '../../Assets/tecnologiasSVG/design/canva.svg';
import figma from '../../Assets/tecnologiasSVG/design/figma.svg';
// import photoshop from '../../Assets/tecnologiasSVG/design/photoshop.svg';
import marvelApp from '../../Assets/tecnologiasSVG/design/marvelApp.svg';
import adobeXd from '../../Assets/tecnologiasSVG/design/adobeXd.svg';

import certSQL from '../../Assets/certifications/certificado-sql.png';
import certgithub from '../../Assets/certifications/certificado-github.png';
import certHenry from '../../Assets/certifications/certificado-henry.png';
import certcode from '../../Assets/certifications/certificado.jpg';
import certHTML from '../../Assets/certifications/HTML_educacionIT.png';
import certfintC
  from '../../Assets/certifications/Certificado-Introducción-a-Csharp.png';
import certintProgramacion
  from '../../Assets/certifications/Certificado-Introducción-a-la-Programación.png';
import certResponsive from '../../Assets/certifications/responsive design.png';
import typescriptPlatzi
  from '../../Assets/certifications/typescript-platzi.png';
import certTypescript
  from '../../Assets/certifications/certfificado-typescript_microsoft.png';
import certnative from '../../Assets/certifications/react-native.jpg';

import cert_basicosql from '../../Assets/certifications/sql/basicosql.png';
import cert_combinacionysubconsulta
  from '../../Assets/certifications/sql/combinacionysubconsulta.png';
import cert_datosagrupados
  from '../../Assets/certifications/sql/datosagrupados.png';
import cert_ins_upd_del from '../../Assets/certifications/sql/ins,upd,del.png';
import cert_tablasfundamentos
  from '../../Assets/certifications/sql/tablas y fundamentos.png';
import {useState} from 'react';

const About = ({lenguageEN}) => {
  const [imageIndex, setImageIndex] = useState (0);

  let arrayImage = [
    cert_basicosql,
    cert_combinacionysubconsulta,
    cert_datosagrupados,
    cert_ins_upd_del,
    cert_tablasfundamentos,
  ];
  return (
    <div>

      {lenguageEN === false
        ? <div className={style.contain} id="about">

            <div className={style.textAndImage}>
              <div className={style.text}>
                <p className={style.title}>Sobre mi</p>
                <p data-aos="fade-right" data-aos-duration="1500">
                  Mi nombre es Ignacio Nicoletti, soy técnico informático con una gran pasión por la programación. Me fascina proporcionar soluciones que agreguen valor a la vida de las personas y, al mismo tiempo, me desafíen. He mejorado mis habilidades como desarrollador tanto Front-End como Back-End.
                </p>
                <p data-aos="fade-right" data-aos-duration="1500">
                  Desde mi infancia, he sentido un gran interés por la programación, lo que me motiva constantemente a perfeccionar mis habilidades y a aprender nuevas tecnologías. Me gradué del Bootcamp SoyHenry, donde uno de mis logros fue que el proyecto grupal que desarrollé fuera considerado uno de los mejores entre las dos cohortes.
                </p>
                <p data-aos="fade-right" data-aos-duration="1500">
                  Soy una persona dedicada que persigue hacer realidad sus sueños, trabajadora y orientada a resultados. Siempre busco alcanzar mi mejor versión sin importar las dificultades.
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
              <div
                className={style.certifications_img}
                data-aos="zoom-out"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >

                <div className={style.certCarrousel}>
                  <button
                    className={style.prev_btn}
                    onClick={() => setImageIndex (imageIndex - 1)}
                    disabled={imageIndex <= 0}
                  >
                    ◀️
                  </button>
                  <img src={arrayImage[imageIndex]} alt="cert_basicosql" />
                  <button
                    className={style.next_btn}
                    onClick={() => setImageIndex (imageIndex + 1)}
                    disabled={imageIndex >= 4}
                  >
                    ▶️
                  </button>
                </div>

                <img src={certnative} alt="cert nativemobile" />
                <img
                  src={typescriptPlatzi}
                  alt="certificado typescript-platzi"
                />
                <img src={certTypescript} alt="cert typescriptmicrosoft" />
                <img src={certResponsive} alt="Responsive-design" />
                <img src={certfintC} alt="certificado C#" />
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
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                        alt="HTML"
                      />
                    </a>

                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={css} alt="CSS" />
                    </a>
                    <a
                      href="https://developer.mozilla.org/es/docs/Web/JavaScript"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={javascript} alt="JavaScript" />
                    </a>
                    <a
                      href="https://www.typescriptlang.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={typescript} alt="Typescript" />
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
                      href="https://dotnet.microsoft.com/es-es/languages/csharp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={csharp} alt="C#" />
                    </a>
                    <a
                      href="https://redux.js.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={redux} alt="Redux" />
                    </a>

                    <a
                      href="https://axios-http.com/es/docs/intro"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          'https://raw.githubusercontent.com/devicons/devicon/master/icons/axios/axios-plain.svg'
                        }
                        alt="Axios"
                      />
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
                      <img
                        src={
                          'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongoose/mongoose-original.svg'
                        }
                        alt="Mongoose"
                      />
                    </a>
                    <a
                      href="https://sequelize.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          'https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg'
                        }
                        alt="Sequelize"
                      />
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
                      href="https://nodemailer.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={NodeEmailer} alt="NodeEmailer" />
                    </a>
                    <a
                      href="https://nodemailer.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Net} alt="NodeEmailer" />
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
                <div className={style.tecnologies}>
                  <h3>Diseño</h3>
                  <div className={style.iconTecnologies}>
                    <a
                      href="https://www.canva.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={canva} alt="Canva" />
                    </a>
                    <a
                      href="https://www.figma.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <img src={figma} alt="Figma" />{' '}
                    </a>
                    <a
                      href="https://www.adobe.com/ar/products/photoshop.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          'https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-original.svg'
                        }
                        alt="photoshop"
                      />
                    </a>
                    <a
                      href="https://marvelapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={marvelApp} alt="MarvelApp" />
                    </a>
                    <a
                      href="https://helpx.adobe.com/es/xd/get-started.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={adobeXd} alt="adobeXd" />
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
                  My name is Ignacio Nicoletti, I am a computer technician with a great passion for programming. I am fascinated by providing solutions that add value to people's lives and, at the same time, challenge me. I have enhanced my skills as a developer in both Front-End and Back-End.
                </p>
                <p data-aos="fade-right" data-aos-duration="1500">
                  Since my childhood, I have had a keen interest in programming, which constantly motivates me to refine my skills and learn new technologies. I graduated from the SoyHenry Bootcamp, where one of my achievements was that the group project I developed was considered one of the best among the two cohorts.
                  {' '}
                </p>
                <p data-aos="fade-right" data-aos-duration="1500">
                  I am a dedicated person who strives to make their dreams come true, hardworking and results-oriented. I always seek to achieve my best version regardless of the challenges.
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
                <img src={certnative} alt="cert nativemobile" />
                <img src={typescriptPlatzi} alt="cert typescript-platzi" />
                <img src={certTypescript} alt="certificado typescript" />
                <img src={certResponsive} alt="Responsive-design" />
                <img src={certfintC} alt="certificado C#" />
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
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                        alt="HTML"
                      />
                    </a>

                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={css} alt="CSS" />
                    </a>
                    <a
                      href="https://developer.mozilla.org/es/docs/Web/JavaScript"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={javascript} alt="JavaScript" />
                    </a>
                    <a
                      href="https://www.typescriptlang.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={typescript} alt="Typescript" />
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
                      href="https://dotnet.microsoft.com/es-es/languages/csharp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={csharp} alt="C#" />
                    </a>
                    <a
                      href="https://redux.js.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={redux} alt="Redux" />
                    </a>

                    <a
                      href="https://axios-http.com/es/docs/intro"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          'https://raw.githubusercontent.com/devicons/devicon/master/icons/axios/axios-plain.svg'
                        }
                        alt="Axios"
                      />
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
                      <img
                        src={
                          'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongoose/mongoose-original.svg'
                        }
                        alt="Mongoose"
                      />
                    </a>
                    <a
                      href="https://sequelize.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          'https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg'
                        }
                        alt="Sequelize"
                      />
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
                      href="https://nodemailer.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={NodeEmailer} alt="NodeEmailer" />
                    </a>
                    <a
                      href="https://nodemailer.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Net} alt="NodeEmailer" />
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
                <div className={style.tecnologies}>
                  <h3>Diseño</h3>
                  <div className={style.iconTecnologies}>
                    <a
                      href="https://www.canva.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={canva} alt="Canva" />
                    </a>
                    <a
                      href="https://www.figma.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <img src={figma} alt="Figma" />{' '}
                    </a>
                    <a
                      href="https://www.adobe.com/ar/products/photoshop.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          'https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-original.svg'
                        }
                        alt="photoshop"
                      />
                    </a>
                    <a
                      href="https://marvelapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={marvelApp} alt="MarvelApp" />
                    </a>
                    <a
                      href="https://helpx.adobe.com/es/xd/get-started.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={adobeXd} alt="adobeXd" />
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
