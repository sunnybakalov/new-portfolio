import React from 'react';
import {
  TheProjectCard,
  ProjectCardTitle,
  ProjectCardLink,
  ProjectCardDescription,
  ProjectCardDivider
} from './styles';

// const sampleProject = {
//   title: 'GreenLight',
//   github: 'https://github.com/sunnybakalov/Green-Light',
//   hosted: 'https://bootcampgreenlight.herokuapp.com/',
//   description:
//     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione sit, aliquid debitis excepturi ut enim accusantium quo. Aliquam quae illum atque accusamus laboriosam nihil, voluptates et minima hic explicabo reiciendis necessitatibus corporis dicta sit, recusandae facere? Placeat nesciunt voluptates, libero natus quod voluptatibus architecto quasi quis eos, fuga porro aliquam!'
// };

export default function ProjectCard({
  id,
  title,
  github,
  hosted,
  description
}) {
  return (
    <TheProjectCard key={id}>
      <ProjectCardTitle>{title}</ProjectCardTitle>
      <ProjectCardDivider />
      <ProjectCardDescription>{description}</ProjectCardDescription>
      <ProjectCardLink>{github}</ProjectCardLink>
      <ProjectCardLink>{hosted}</ProjectCardLink>
    </TheProjectCard>
  );
}
