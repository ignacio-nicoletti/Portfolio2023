import style from './navbar.module.css';
import CurriculumES from '../../Assets/cv-nicolettiignacio-español.pdf';
import CurriculumEN from '../../Assets/cv-nicolettiignacio-english.pdf';
import {useState} from 'react';
import menuH from '../../Assets/iconNavbar/menu.svg';
import menuClose from '../../Assets/iconNavbar/menuCancel.svg';

const Navbar = ({setLenguageEN, lenguageEN}) => {
  const [menu, setMenu] = useState (true);

  return (
    <div>

      {lenguageEN == false
        ? <div className={style.contain}>
            <div className={style.navbarDesktop}>

              <div>Ignacio Nicoletti</div>
              <div className={style.options}>
                <div className={style.languageSwitch}>
                  <input
                    type="checkbox"
                    className={style.languageSwitchCheckbox}
                    id="toggle"
                    onClick={() => setLenguageEN (!lenguageEN)}
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

                <a href={CurriculumES} className={style.buttonCV}>
                  CV
                </a>
              </div>
            </div>

            <div className={style.navbarMobile}>

              <div className={style.buttonMenus}>
                <div>Ignacio Nicoletti</div>
                {menu === true
                  ? <img src={menuH} alt="" onClick={() => setMenu (false)} />
                  : <img
                      src={menuClose}
                      alt=""
                      onClick={() => setMenu (true)}
                    />}
              </div>
              <div className={menu ? style.optionsActive : style.options}>
                <div className={style.switch}>
                  <input
                    onClick={() => setLenguageEN (!lenguageEN)}
                    className={style.container_toggle}
                    type="checkbox"
                    id="switch"
                    name="mode"
                  />
                  <label htmlFor="switch" />
                  {lenguageEN === true ? <p>EN</p> : <p>ES</p>}

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

                <a href={CurriculumES} className={style.buttonCV}>
                  CV
                </a>
              </div>
            </div>
          </div>
        : <div className={style.contain}>
            <div className={style.navbarDesktop}>

              <div>Ignacio Nicoletti</div>
              <div className={style.options}>
                <div className={style.languageSwitch}>
                  <input
                    type="checkbox"
                    className={style.languageSwitchCheckbox}
                    id="toggle"
                    onClick={() => setLenguageEN (!lenguageEN)}
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
                  <p>Home </p>
                </a>

                <a href="#about">
                  <p>About Me</p>
                </a>

                <a href="#projects">
                  <p>Projects</p>
                </a>

                <a href="#contact">
                  <p>Contact</p>
                </a>

                <a href={CurriculumEN} className={style.buttonCV}>
                  CV
                </a>
              </div>
            </div>

            <div className={style.navbarMobile}>

              <div className={style.buttonMenus}>
                <div>Ignacio Nicoletti</div>
                {menu === true
                  ? <img src={menuH} alt="" onClick={() => setMenu (false)} />
                  : <img
                      src={menuClose}
                      alt=""
                      onClick={() => setMenu (true)}
                    />}
              </div>
              <div className={menu ? style.optionsActive : style.options}>
                <div className={style.switch}>
                  <input
                    onClick={() => setLenguageEN (!lenguageEN)}
                    className={style.container_toggle}
                    type="checkbox"
                    id="switch"
                    name="mode"
                  />
                  <label htmlFor="switch" />
                  {lenguageEN === true ? <p>EN</p> : <p>ES</p>}

                </div>
                <a href="/">
                  <p>Home </p>
                </a>

                <a href="#about">
                  <p>About Me</p>
                </a>

                <a href="#projects">
                  <p>Projects</p>
                </a>

                <a href="#contact">
                  <p>Contact</p>
                </a>

                <a href={CurriculumEN} className={style.buttonCV}>
                  CV
                </a>
              </div>
            </div>
          </div>}
    </div>
  );
};
export default Navbar;
