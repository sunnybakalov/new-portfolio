import React, { useState } from 'react';
import '../../Main.css';
// import headshot from '../../assets/images/headshot.jpg';
import placeholder from '../../assets/images/240.jpg';
import './about.css';


const About = () => {
  return(
    <div className="container" id="about">
      <h2>About Me</h2>
      <div className="aboutContainer">
        <div className="aboutParagraph">
          <p>
            Hello! My name is Stan and I'm a software engineer based in Bluffdale, UT who enjoys front end development. I develop exceptional web apps as well as websites that provide user friendly interfaces with efficient, modern backends.
          </p>
          <br />
          <p>
            Shortly before I finished my bootcamp from the University of Utah, I joined the engineering team at Podium where I have learned more than I ever could imagine. My role consists of an even balance of frontend and backend work, and I've also gained some product management experience.
          </p>
          <br />
          <p>
            Here are some of the technologies that I've been working with:
          </p>
            <ul>
              <li>React</li>
              <li>JavaScript (ES6)</li>
              <li>Elixir</li>
              <li>Phoenix</li>
              <li>Postgres</li>
            </ul>
        </div>
        <div className="portrait">
          <img src={placeholder} alt="ERROR" className="headshot"/>
        </div>
      </div>
    </div>
  )
};

export default About;
