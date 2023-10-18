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
          <div className={style.switch}>

            <input
              type="checkbox"
              id="switch"
              onClick={() => setEnglish (!english)}
            />
            <label for="switch">Toggle</label>
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
              type="checkbox"
              id="switch"
              onClick={() => setEnglish (!english)}
            />
            <label for="switch">Toggle</label>
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
