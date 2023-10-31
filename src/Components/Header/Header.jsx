import style from './Header.module.css';

const Header = ({lenguageEN}) => {
  return (
    <div>
      {lenguageEN === false
        ? <div className={style.contain}>
            <div className={style.texto}>

              <span>Ignacio Nicoletti</span>
              <p className={style.subtitle}>
                Desarrollador Full Stack con orientacion Backend
              </p>
              <p>
                Formandome profesionalmente día a día y creando proyectos para la comunidad.
              </p>

              <div className={style.ContactButton}>
                <a href="#contact">
                  <button>Contacto</button>
                </a>
              </div>
            </div>
          </div>
        : <div className={style.contain}>
            <div className={style.texto}>

              <span>Ignacio Nicoletti</span>
              <p className={style.subtitle}>
                Full Stack Developer with Backend orientation
              </p>
              <p>
                im improving profesionaly day by day and creating projects for community

              </p>

              <div className={style.ContactButton}>
                <a href="#contact">
                  <button>Contact</button>
                </a>
              </div>
            </div>
          </div>}
    </div>
  );
};

export default Header;

// im improving profesionaly day by day and creating projects for community
