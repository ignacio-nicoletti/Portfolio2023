import {dataEnglish, dataEspañol} from '../../lenguage';
import style from './Header.module.css';

const Header = ({lenguageEN}) => {
  return (
    <div>
      <div className={style.contain}>
        <div className={style.texto}>
          <span>
            {lenguageEN ? dataEnglish.header.name : dataEspañol.header.name}
          </span>
          <p className={style.subtitle}>
            {lenguageEN ? dataEnglish.header.title : dataEspañol.header.title}
          </p>
          <p>
            {lenguageEN
              ? dataEnglish.header.subtitle
              : dataEspañol.header.subtitle}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Header;