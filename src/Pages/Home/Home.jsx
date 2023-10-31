import {useState} from 'react';
import About from '../../Components/About/About';
import {Footer} from '../../Components/Footer/Footer';
import {ContactForm} from '../../Components/Form/ContactForm';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/navbar';
import Projects from '../../Components/Projects/Projects';

import style from './Home.module.css';
export const Home = () => {
  const [lenguageEN, setLenguageEN] = useState (false);

  return (
    <div className={style.contain}>

      <Navbar setLenguageEN={setLenguageEN} lenguageEN={lenguageEN} />
      <Header lenguageEN={lenguageEN} />
      <About lenguageEN={lenguageEN} />
      <Projects lenguageEN={lenguageEN} />
      <ContactForm lenguageEN={lenguageEN} />
      <Footer lenguageEN={lenguageEN} />
    </div>
  );
};
