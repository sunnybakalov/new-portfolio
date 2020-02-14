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

export const Divider = styled.div`
  background-color: #E4E9F0;
  margin: auto;
  width: 80%;
  height: 2px;
  justify-items: center;
`;

// home screen text
export const Name = styled.h2`
  font-size: 48px;
  margin: 25px 0 25px 0;
`;

export const SubHeading = styled.h2`
  font-size: 4em;
  margin: 0;
`;

export const ShortBio = styled.p`
  width: 600px;
  font-size: 1em;
  line-height: 1.6;
`;

export const HomeTextContainer = styled.div`
  margin-bottom: 35px;
`;

export const AboutParagraphContainer = styled.div`
  width: 50%;

  p {
    text-align: center;
  }

  .technologies {
    display: block;
    height: 75px;
    img {
      height: 20px;
      width: 20px;
    }
    span {
      padding: 10px;
      border: 1px solid #E4E9F0;
    }
  }
`;

export const AboutMeLeftContainer = styled.div`
  display: flex;
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

  #about {
    height: 100vh;
  }
`;

export const SectionHeading = styled.h3`
  padding-left: 50px;
  font-size: 22px;
`;
