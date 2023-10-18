import About from '../../Components/About/About';
import { Footer } from '../../Components/Footer/Footer';
import { ContactForm } from '../../Components/Form/ContactForm';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/navbar';
import Projects from '../../Components/Projects/Projects';

import style from './Home.module.css';
export const Home = () => {
  return (
    <div className={style.contain}>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <ContactForm/>
      <Footer/>
    </div>
  );
};
