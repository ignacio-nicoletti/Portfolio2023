import React from 'react';
import Projects from '../../Components/Projects/Projects';

const ProjectPage = ({lenguageEN}) => {
  return (
    <div>
        <Projects lenguageEN={lenguageEN} />
    </div>
  );
};

export default ProjectPage;
