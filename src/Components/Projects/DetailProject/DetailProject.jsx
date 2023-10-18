import style from './DetailProject.module.css';
import githubIcon from '../../../Assets/github-icon.svg';
import deployIcon from '../../../Assets/external-link-icon.svg';
import {useState} from 'react';
import loading from '../../../Assets/Imagesprojects/loading.mp4';
const DetailProject = ({
  title,
  description,
  tecnologies,
  deploy,
  linkGithub,
  linkDeploy,
  setModalActive,
  MediaProject,
  videoProject,
}) => {
  const images = [
    MediaProject[0],
    MediaProject[1],
    MediaProject[2],
    MediaProject[3],
  ];
  console.log (videoProject);
  return (
    <div className={style.contain}>
      <div className={style.card}>
        <div className={style.buttonClose}>

          <button
            type="button"
            className={style.btn_close}
            onClick={() => setModalActive (false)}
          >
            <span className={style.icon_cross} />
            <span className={style.visually_hidden}>X</span>
          </button>

        </div>

        <div className={style.TitleAndVideo}>
          <h2>{title}</h2>
          {videoProject !== ''
            ? <video src={videoProject} controls autoPlay />
            : <video src={loading} autoPlay Loop/>}
        </div>

        <div className={style.carrousel}>
          {MediaProject.map ((el, index) => (
            <img src={el} alt="" key={index} />
          ))}
        </div>

        <div className={style.description}>
          <p>{description}</p>
        </div>

        <div className={style.tecnologiesAndIconDeploy}>

          <div className={style.tecnologies}>
            {tecnologies.map ((el, index) => <p key={index}>{el}</p>)}
          </div>
          <div className={style.icondeploy}>
            {deploy === true
              ? <a href={linkDeploy} target="_blank" rel="noreferrer">
                  <img src={deployIcon} alt="" />
                </a>
              : <a href={linkGithub} target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="" />
                </a>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailProject;
