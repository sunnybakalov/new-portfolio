import React, { useState } from 'react';
import '../../Main.css';

const Contact = () => {
  return(
    <div className="container" id="contact">
      <div>
        <form>
          Name:<br/>
          <input type="text" name="name" />
          <br/>
          Email:<br/>
          <input type="text" name="email" />
          <br/>
          Message:<br/>
          <textarea>
          </textarea>
          <br/>
        </form>
      </div>
      <button>
        Contact Me
      </button>

    </div>
  )
};

export default Contact;