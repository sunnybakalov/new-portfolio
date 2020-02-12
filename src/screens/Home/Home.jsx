import React, { useState } from 'react';
import { ContactMeButton, Name, SectionContainer } from '../../assets/styles/reusables';


const Home = () => {
  return(
    <SectionContainer className="homeContainer">
      <div>
        <h3>Hi, my name is</h3>
        <Name>Sunny Bakalov.</Name>
        <h2>I build websites.</h2>
        <br/>
        <br/>
        <p className="shortBio">
          I am a software engineer based in Bluffdale, UT.<br/>
          I specialize in building and designing high-quality websites and applications.
        </p>
      </div>
      <ContactMeButton href={`mailto:sunny.bakalov@gmail.com`} target="_blank">
        Contact Me
      </ContactMeButton>

    </SectionContainer>
  )
};

export default Home;
