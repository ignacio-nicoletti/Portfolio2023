import About from '../../Components/About/About';
import Header from '../../Components/Header/Header';
import style from './Home.module.css';

export const Home = ({lenguageEN}) => {
  return (
    <div className={style.contain}>
      <Header lenguageEN={lenguageEN} />
      <About lenguageEN={lenguageEN} />
    </div>
  );
};
