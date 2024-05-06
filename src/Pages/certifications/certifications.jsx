import React, {useState} from 'react';
import style from './certifications.module.css';

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
import cert_fundaula_intProg
  from '../../Assets/certifications/fundaula_intProg.png';

import fundamentos
  from '../../Assets/certifications/Jsinteractivo/fundamentos.png';
import flujoJs from '../../Assets/certifications/Jsinteractivo/js_flujo.png';
import arreglosJS from '../../Assets/certifications/Jsinteractivo/arreglos.png';
import ciclos from '../../Assets/certifications/Jsinteractivo/ciclosJS.png';
import tipo_datos
  from '../../Assets/certifications/Jsinteractivo/tipos_datos_js.png';
import stringsJs from '../../Assets/certifications/Jsinteractivo/stringjs.png';

const CertificationPage = ({lenguageEN}) => {
  const [imageIndexSQL, setImageIndexSQL] = useState (0);
  const [imageIndexJs, setImageIndexJs] = useState (0);

  let arrayImageSQL = [
    cert_basicosql,
    cert_combinacionysubconsulta,
    cert_datosagrupados,
    cert_ins_upd_del,
    cert_tablasfundamentos,
  ];
  let arrayImageJS = [
    fundamentos,
    flujoJs,
    arreglosJS,
    ciclos,
    tipo_datos,
    stringsJs,
  ];
  return (
    <div className={style.containCert}>
      <div className={style.certifications}>
        <p className={style.title}>
          {lenguageEN ? 'My certifications' : 'Mis certificados'}
        </p>
        <div
          className={style.certifications_img}
          data-aos="zoom-out"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >

          <div className={style.certCarrousel}>
            <button
              className={style.prev_btn}
              onClick={() => setImageIndexJs (imageIndexJs - 1)}
              disabled={imageIndexJs <= 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 6l-6 6l6 6v-12" />
              </svg>
            </button>
            <img
              src={arrayImageJS[imageIndexJs]}
              alt={`${arrayImageJS[imageIndexJs]} `}
            />
            <button
              className={style.next_btn}
              onClick={() => setImageIndexJs (imageIndexJs + 1)}
              disabled={imageIndexJs >= 5}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 18l6 -6l-6 -6v12" />
              </svg>
            </button>
          </div>

          <div className={style.certCarrousel}>
            <button
              className={style.prev_btn}
              onClick={() => setImageIndexSQL (imageIndexSQL - 1)}
              disabled={imageIndexSQL <= 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 6l-6 6l6 6v-12" />
              </svg>
            </button>
            <img
              src={arrayImageSQL[imageIndexSQL]}
              alt={`${arrayImageSQL[imageIndexSQL]} `}
            />
            <button
              className={style.next_btn}
              onClick={() => setImageIndexSQL (imageIndexSQL + 1)}
              disabled={imageIndexSQL >= 4}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 18l6 -6l-6 -6v12" />
              </svg>
            </button>
          </div>

          <img src={certnative} alt="cert nativemobile" />
          <img src={typescriptPlatzi} alt="certificado typescript-platzi" />
          <img src={certTypescript} alt="cert typescriptmicrosoft" />
          <img src={certResponsive} alt="Responsive-design" />
          <img src={cert_fundaula_intProg} alt="cert_fundaula_intProg" />
          <img src={certfintC} alt="certificado C#" />
          <img src={certintProgramacion} alt="certificado HMTL" />
          <img src={certHTML} alt="certificado HMTL" />
          <img src={certSQL} alt="certificado SQL" />
          <img src={certgithub} alt="certificado de github" />
          <img src={certHenry} alt="certificado de henry" />
          <img src={certcode} alt="certificado code" />
        </div>

      </div>
    </div>
  );
};

export default CertificationPage;
