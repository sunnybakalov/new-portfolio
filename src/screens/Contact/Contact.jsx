import React, { useState } from 'react';
import { ContactMeButton, SectionContainer, SectionHeading } from '../../assets/styles/reusables';
import '../../Main.css';
import './contact.css';

const Contact = () => {
  return(
    <SectionContainer id="contact">
      <SectionHeading>Contact Me</SectionHeading>
      <p>
        Feel free to contact me for freelance work, collaborations, or if you'd just like to chat.
      </p>
      <ContactMeButton href={`mailto:sunny.bakalov@gmail.com`} target="_blank">
        Contact Me
      </ContactMeButton>
    </SectionContainer>
  )
};

export default Contact;
