import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Footer() {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <div>
        Copyright 2020
        <p>Designed by Stan Bakalov</p>
      </div>
      <button onClick={scrollToTop}>To Top</button>
    </div>
  );
};
