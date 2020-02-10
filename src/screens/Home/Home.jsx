import React, { useState } from 'react';
import '../../Main.css';


const Home = () => {
  return(
    <div className="homeContainer">
      <div>
        <h2>Hi, my name is</h2>
        <h2 className="name">Stan Bakalov.</h2>
        <h2>I build websites.</h2>
        <br/>
        <br/>
        <p className="shortBio">
          I am a software engineer based in Bluffdale, UT.<br/>
          I specialize in building and designing high-quality websites and applications.
        </p>
      </div>
      <button>
        Contact Me
      </button>

    </div>
  )
};

export default Home;
