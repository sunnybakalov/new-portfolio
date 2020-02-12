import React from 'react';
import * as icon from '../../assets/images/index';
import {
  TheProjectCard,
  ProjectCardTitle,
  ProjectCardLink,
  ProjectCardDescription,
  ProjectCardDivider
} from './styles';

const sampleProject = {
  title: 'GreenLight',
  github: 'https://github.com/sunnybakalov/Green-Light',
  hosted: 'https://bootcampgreenlight.herokuapp.com/',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione sit, aliquid debitis excepturi ut enim accusantium quo. Aliquam quae illum atque accusamus laboriosam nihil, voluptates et minima hic explicabo reiciendis necessitatibus corporis dicta sit, recusandae facere? Placeat nesciunt voluptates, libero natus quod voluptatibus architecto quasi quis eos, fuga porro aliquam!'
};

export default function ProjectCard() {
  return (
    <TheProjectCard>
      <ProjectCardTitle>{sampleProject.title}</ProjectCardTitle>
      <ProjectCardDivider />
      <ProjectCardDescription>
        {sampleProject.description}
      </ProjectCardDescription>
      <ProjectCardLink>{sampleProject.links}</ProjectCardLink>
    </TheProjectCard>
  );
}
