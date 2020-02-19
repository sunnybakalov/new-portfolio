import React, { useState } from 'react';
import '../../Main.css';
import * as icon from '../../assets/images/index';
// import headshot from '../../assets/images/headshot.jpg';
import placeholder from '../../assets/images/240.jpg';
import { AboutMeLeftContainer, AboutParagraphContainer, Divider, SectionContainer, SectionHeading } from '../../assets/styles/reusables';


const About = () => {
  return(
    <SectionContainer id="about">
      <SectionHeading>About Me</SectionHeading>
      <AboutMeLeftContainer>
        <AboutParagraphContainer>
          <p>
            Hello! My name is Stan and I'm a software engineer based in Bluffdale, UT who enjoys front end development. I develop exceptional web apps as well as websites that provide user friendly interfaces with efficient, modern backends.
          </p>
          <br />
          <p>
            Shortly before I finished my bootcamp from the University of Utah, I joined the engineering team at Podium where I have learned more than I ever could imagine. My role consists of an even balance of frontend and backend work, and I've also gained some product management experience.
          </p>
          <Divider />
          <p>
            Here are some of the technologies that I've been working with:
          </p>
          <div className="technologies">
            <span><img src={icon.react} alt=""/>React</span>
            <span><img src={icon.js} alt=""/>JavaScript (ES6)</span>
            <span><img src={icon.elixir} alt=""/>Elixir</span>
            <span><img src={icon.phoenix} alt=""/>Phoenix</span>
            <span><img src={icon.postgres} alt=""/>Postgres</span>
          </div>
        </AboutParagraphContainer>
        <div className="portrait">
          <img src={placeholder} alt="ERROR" className="headshot"/>
        </div>
      </AboutMeLeftContainer>
    </SectionContainer>
  )
};

export default About;
