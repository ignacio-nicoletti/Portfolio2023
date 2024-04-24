import { Home } from "./Pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "./Pages/projectsPage/projectPage";
import CertificationPage from "./Pages/certifications/certifications";
import Navbar from "./Components/Navbar/navbar";
import { Footer } from "./Components/Footer/Footer";

function App() {
  const [lenguageEN, setLenguageEN] = useState(false);
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div>
      <Navbar setLenguageEN={setLenguageEN} lenguageEN={lenguageEN} />
      <Routes>
        <Route path="/" element={<Home lenguageEN={lenguageEN} />} />
        <Route
          path="/certifications"
          element={<CertificationPage lenguageEN={lenguageEN} />}
        />
        <Route
          path="/projects"
          element={<ProjectPage lenguageEN={lenguageEN} />}
        />
      </Routes>
      <Footer lenguageEN={lenguageEN} />
    </div>
  );
}

export default App;
