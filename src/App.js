import React from 'react';
import Fade from 'react-reveal/Fade';
import './App.css';
import Nav from '../src/components/Nav/Nav';
import DarkMode from '../src/components/DarkMode/DarkMode';
import Footer from '../src/components/Footer/Footer';
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop';
import Home from '../src/screens/Home/Home';
import About from '../src/screens/About/About';
import Contact from '../src/screens/Contact/Contact';
import Projects from '../src/screens/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <DarkMode />
        <Home id="home" />
        <Fade>
          <About id="about" />
        </Fade>
        <Fade>
          <Projects id="projects" />
        </Fade>
        <Fade>
          <Contact id="contact" />
        </Fade>
        <ScrollToTop className="scrollToTop"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
