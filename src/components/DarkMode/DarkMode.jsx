import React, { useEffect, useState } from 'react';
import Toggle from 'react-toggle'
import * as icon from '../../assets/images/index';
import './darkmode.css';

const DarkMode = () => {
  const [lightMode, setLightMode] = useState(false);

  const body = document.querySelector('body');

  const toggleMode = (event) => {
    if (body.classList.contains('light-mode')) {
      body.classList.remove('light-mode');
      setLightMode(!lightMode);
    } else {
      body.classList.add('light-mode');
      setLightMode(lightMode);
    }
  }

  return (
    <label className="modeToggle">
      <Toggle
        className="toggle"
        defaultChecked={lightMode}
        // icons={{
        //   checked: icon.moon,
        //   unchecked: icon.sun,
        // }}
        onClick={toggleMode}
        />
      <p>Dark/Light Mode</p>
    </label>
  );
};

export default DarkMode;
