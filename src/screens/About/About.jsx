import React, { useState } from 'react';
import '../../Main.css';


const About = () => {
  return(
    <div className="container" id="about">
      <h2>About Me</h2>
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
          <ul>
            <li>React</li>
            <li>JavaScript (ES6)</li>
            <li>Elixir</li>
            <li>Phoenix</li>
            <li>Postgres</li>
          </ul>
        </p>
      </div>
      <div className="portrait">
        <img src="https://www.google.com/search?q=lebron+james&sxsrf=ACYBGNQB1lT1KXCwd4rS9N0GErr1S73kFQ:1580944126346&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjJ0L3ow7vnAhWIr54KHTuSBCIQ_AUoAnoECBQQBA&biw=1323&bih=790#imgrc=OjKjZW7XF7XhNM" alt="ERROR" />
      </div>
    </div>
  )
};

export default About;
