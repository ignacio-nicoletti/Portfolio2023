import style from './About.module.css';
import imageProfile from '../../Assets/nacho.png';
import {dataEnglish, dataEspañol} from '../../lenguage';
import TecnologiesMain from '../Tecnologies/tecnologies';
import Services from '../services/service';
import {
  IconMail,
  IconBrandWhatsapp,
  IconBrandLinkedin,
} from '@tabler/icons-react';

const About = ({lenguageEN}) => {
  return (
    <div>
      <div className={style.contain} id="about">

        <div className={style.textAndImage}>
          <div className={style.text}>
            <p className={style.title}>
              {lenguageEN ? dataEnglish.about.title : dataEspañol.about.title}
            </p>
            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              className={style.description}
            >
              {lenguageEN
                ? dataEnglish.about.description
                : dataEspañol.about.description}
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
        <div className={style.contact}>
          <p className={style.title}>{lenguageEN ? 'Contact' : 'Contacto'}</p>
          <div className={style.ContainSocial}>
            <div className={style.iconAndText}>
              <a
                href="mailto:nicolettiignacio5@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <IconMail stroke={2} className={style.icon} />
              </a>
              <p className={style.textContact}>Gmail</p>
            </div>
            <div className={style.iconAndText}>
              <a
                href="https://api.whatsapp.com/send/?phone=542213195893&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandWhatsapp stroke={2} className={style.icon} />
              </a>
              <p className={style.textContact}>WhatsApp</p>
            </div>
            <div className={style.iconAndText}>
              <a
                href="https://www.linkedin.com/in/ignacio-nicoletti/"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandLinkedin stroke={2} className={style.icon} />
              </a>
              <p className={style.textContact}>Linkedin</p>
            </div>
          </div>
        </div>

        <div className={style.ability}>
          <p className={style.title}>
            {' '}
            {lenguageEN
              ? dataEnglish.about.titleTecnology
              : dataEspañol.about.titleTecnology}
          </p>
        </div>

        <TecnologiesMain />
        <Services lenguageEN={lenguageEN} />
      </div>
    </div>
  );
};
export default About;
