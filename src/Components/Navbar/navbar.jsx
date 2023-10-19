import style from './navbar.module.css';
import Curriculum from '../../Assets/cv-nicolettiignacio-español.pdf';
import {useState} from 'react';
import menuH from '../../Assets/iconNavbar/menu.svg';
import menuClose from '../../Assets/iconNavbar/menuCancel.svg';

const Navbar = () => {
  const [english, setEnglish] = useState (false);

  const [menu, setMenu] = useState (false);

  return (
    <div className={style.contain}>
      <div className={style.navbarDesktop}>

        <div>Ignacio Nicoletti</div>
        <div className={style.options}>
          <div className={style.languageSwitch}>
            <input
              type="checkbox"
              className={style.languageSwitchCheckbox}
              id="toggle"
              onClick={() => setEnglish (!english)}
            />
            <label className={style.languageSwitchLabel} htmlFor="toggle">
              <span className={style.languageSwitchInner} />
              <span className={style.languageSwitchSwitch} />
            </label>
            <div className={style.languageText}>
              <span className={style.languageTextEn}>EN</span>
              <span className={style.languageTextEs}>ES</span>
            </div>
          </div>

          <a href="/">
            <p>Inicio </p>
          </a>

          <a href="#about">
            <p>Sobre Mi</p>
          </a>

          <a href="#projects">
            <p>Proyectos</p>
          </a>

          <a href="#contact">
            <p>Contacto</p>
          </a>

          <a href={Curriculum} className={style.buttonCV}>
            CV
          </a>
        </div>
      </div>

      <div className={style.navbarMobile}>

        <div className={style.buttonMenus}>
          <div>Ignacio Nicoletti</div>
          {menu === true
            ? <img src={menuH} alt="" onClick={() => setMenu (false)} />
            : <img src={menuClose} alt="" onClick={() => setMenu (true)} />}
        </div>
        <div className={menu ? style.optionsActive : style.options}>
          <div className={style.switch}>
            <input
              onClick={() => setEnglish (!english)}
              className={style.container_toggle}
              type="checkbox"
              id="switch"
              name="mode"
            />
            <label htmlFor="switch" />
            {english === true ? <p>EN</p> : <p>ES</p>}

          </div>
          <a href="/">
            <p>Inicio </p>
          </a>

          <a href="#about">
            <p>Sobre Mi</p>
          </a>

          <a href="#projects">
            <p>Proyectos</p>
          </a>

          <a href="#contact">
            <p>Contacto</p>
          </a>

          <a href={Curriculum} className={style.buttonCV}>
            CV
          </a>
        </div>
      </div>

    </div>
  );
};
export default Navbar;
