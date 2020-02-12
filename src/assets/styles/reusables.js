import styled from 'styled-components';

export const ContactMeButton = styled.a`
  border: 1px solid #AAFBAA;
  border-radius: 5px;
  color: #AAFBAA;
  padding: 10px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  transition: 70ms;
  &:hover, &:focus {
    background-color: #99E199;
    border: 1px solid #99E199;
    color: #F5F5F5;
  }
`;

export const Name = styled.h2`
  font-size: 48px;
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  row-gap: 100px;
  justify-items: center;
  padding: 0 100px 0 100px;
`;

export const SectionContainer = styled.div`
  height: 100vh;
  padding-left: 75px;

  .homeContainer {
    padding: 100px;
  }
`;

export const SectionHeading = styled.h3`
  padding-left: 50px;
  font-size: 22px;
`;