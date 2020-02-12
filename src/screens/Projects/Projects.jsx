import React, { useState } from 'react';
import { ProjectsContainer, SectionHeading } from '../../assets/styles/reusables';
import ProjectCard from '../../components/ProjectCard/ProjectCard';


const Projects = () => {
  return(
    <di className="container" id="projects">
      <SectionHeading>Projects</SectionHeading>
      <ProjectsContainer>
        <ProjectCard />
        {/* <img src="https://via.placeholder.com/325" alt="Error" /> */}
        <img src="https://via.placeholder.com/325" alt="Error" />
        <img src="https://via.placeholder.com/325" alt="Error" />
        <img src="https://via.placeholder.com/325" alt="Error" />
        <img src="https://via.placeholder.com/325" alt="Error" />
        <img src="https://via.placeholder.com/325" alt="Error" />
      </ProjectsContainer>
    </di>
  )
};

export default Projects;
