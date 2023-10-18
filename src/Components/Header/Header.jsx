import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.contain}>
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
  );
};

export default Header;
