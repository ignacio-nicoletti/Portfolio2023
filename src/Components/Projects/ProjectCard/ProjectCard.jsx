import style from './ProjectCard.module.css';
import githubIcon from '../../../Assets/github-icon.svg';
import deployIcon from '../../../Assets/external-link-icon.svg';

const ProjectCard = ({
  title,
  description,
  PortadaProject,
  tecnologies,
  deploy,
  linkDeploy,
  linkGithub,
  modalActive,
  setModalActive,
  handleModalActive,
  index
}) => {

  return (
    <div className={style.contain} >
      <div className={style.title}>
        <p onClick={()=>handleModalActive(true,index)}>{title}</p>
      </div>

      <div className={style.imageProject}>
        <img src={PortadaProject} alt="" />
      </div>

      <div className={style.description}>
        <p>
          {description}
        </p>
      </div>

      <div className={style.tecnologies}>
        {tecnologies.map ((el,index) => <p key={index}>{el}</p>)}
      </div>
      <div className={style.iconsDeploy}>
        {deploy === true
          ? <a href={linkDeploy} target="_blank" rel="noreferrer">
              <img src={deployIcon} alt="Visitar sitio" />
            </a>
          : <a href={linkGithub} target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="Visitar sitio" />
            </a>}
      </div>

     
    </div>
  );
};
export default ProjectCard;
