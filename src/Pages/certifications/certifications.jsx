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

const CertificationPage = ({lenguageEN}) => {
  const [imageIndex, setImageIndex] = useState (0);

  let arrayImage = [
    cert_basicosql,
    cert_combinacionysubconsulta,
    cert_datosagrupados,
    cert_ins_upd_del,
    cert_tablasfundamentos,
  ];
  return (
    <div className={style.containCert}>
      <div className={style.certifications}>
        <p className={style.title}>{lenguageEN?"My certifications":"Mis certificados"}</p>
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
            <img
              src={arrayImage[imageIndex]}
              alt={`${arrayImage[imageIndex]} `}
            />
            <button
              className={style.next_btn}
              onClick={() => setImageIndex (imageIndex + 1)}
              disabled={imageIndex >= 4}
            >
              ▶️
            </button>
          </div>

          <img src={certnative} alt="cert nativemobile" />
          <img src={typescriptPlatzi} alt="certificado typescript-platzi" />
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
    </div>
  );
};

export default CertificationPage;
