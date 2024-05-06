import React from 'react';
import style from './services.module.css';
import {dataEnglish, dataEspañol} from '../../lenguage';

const Services = ({lenguageEN}) => {
  const data = lenguageEN ? dataEnglish : dataEspañol;

  return (
    <div className={style.ContainServices}>

      <p className={style.titleService}>
        {lenguageEN ? 'Services' : 'Servicios'}
      </p>
      <div className={style.ContainCardsServices}>
        {data.services.map (service => (
          <div
            className={style.cardContain}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className={style.icon}>
              {service.icon}
            </div>

            <p className={style.title}>{service.title}</p>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
