import React, { useState } from 'react';
import { ContactMeButton, HomeTextContainer, Name, SectionContainer, ShortBio, SubHeading } from '../../assets/styles/reusables';


const Home = () => {
  return(
    <SectionContainer className="homeContainer">
      <HomeTextContainer>
        <h3>Hi, my name is</h3>
        <Name>Sunny Bakalov.</Name>
        <SubHeading>I build apps & websites.</SubHeading>
        <br/>
        <ShortBio>
          I am a software engineer based in Bluffdale, UT.
          I specialize in building & designing high-quality websites and applications.
        </ShortBio>
      </HomeTextContainer>
      <ContactMeButton href={`mailto:sunny.bakalov@gmail.com`} target="_blank">
        Contact Me
      </ContactMeButton>

    </SectionContainer>
  )
};

export default Home;
