import React, { useState } from 'react';
import { ProjectsContainer, SectionHeading } from '../../assets/styles/reusables';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from './listOfProjects.js';

const Projects = () => {
  return(
    <div className="container" id="projects">
      <SectionHeading>Projects</SectionHeading>
      <ProjectsContainer>
        {
          projects.map(function(item, p){
            return (
              <ProjectCard />
            )
          })
        }
      </ProjectsContainer>
    </div>
  )
};

export default Projects;
