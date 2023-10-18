import ProjectCard from './ProjectCard/ProjectCard';
import style from './Projects.module.css';
import DBProjects from '../../DBProjects';
import DetailProject from './DetailProject/DetailProject';
import {useState} from 'react';
const Projects = () => {
  const [modalActive, setModalActive] = useState (false);
  const [index, setIndex] = useState (1);

  const handleModalActive = (value, id) => {
    setModalActive (value);
    setIndex (id);
  };

  return (
    <div className={style.contain} id="projects">
      <p className={style.title}>Mis trabajos</p>
      <div
        className={style.projects}
        data-aos="zoom-in"
        data-aos-duration="1000"
      >

        {DBProjects.map ((el, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={el.title}
            description={el.shortDescription}
            PortadaProject={el.PortadaProject}
            tecnologies={el.tecnologies}
            deploy={el.deploy}
            linkGithub={el.linkGitHub}
            linkDeploy={el.linkDeploy}
            setModalActive={setModalActive}
            modalActive={modalActive}
            handleModalActive={handleModalActive}
          />
        ))}
      </div>
      {modalActive &&
        <DetailProject
          title={DBProjects[index].title}
          description={DBProjects[index].longDescription}
          tecnologies={DBProjects[index].tecnologies}
          deploy={DBProjects[index].deploy}
          linkGithub={DBProjects[index].linkGitHub}
          linkDeploy={DBProjects[index].linkDeploy}
          setModalActive={setModalActive}
          modalActive={modalActive}
          MediaProject={DBProjects[index].MediaProject}
          videoProject={DBProjects[index].videoProject}
        />}
    </div>
  );
};
export default Projects;
