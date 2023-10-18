import React from 'react';

import reactIcon from '../../Assets/tecnologiasSVG/react-icon.svg';
import linkedinIcon from '../../Assets/linkedin.png';
import githubIcon from '../../Assets/github.png';
import instagramIcon from '../../Assets/instagram.png';
import style from './Footer.module.css';

export function Footer () {
  return (
    <div className={style.contain}>
      <div
        className={style.logo}
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1500"
      >
        <a href="/">
          <span>Ignacio </span>
          <span>Nicoletti</span>
        </a>
      </div>

      <div className={style.centerFooter}>
        <p>
          Este sitio fue desarrollado con React{' '}
        </p>
        <img src={reactIcon} alt="React" />
      </div>

      <div className={style.social_media}>
        <a
          href="https://www.linkedin.com/in/ignacio-nicoletti/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/ignacio-nicoletti"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/nacho.nicoletti"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </div>
  );
}
