import React from 'react';
import Toggle from 'react-toggle'
import * as icon from '../../assets/images/index';

export const DarkMode = (props) => {
  <label>
    <Toggle
      defaultChecked={props.darkMode}
      icons={{
        checked: icon.moon,
        unchecked: icon.sun,
      }}
      onClick={props.handleToggle}
      />
    <span>Dark/Light Mode</span>
  </label>
};

