import React from 'react';
import './App.css';
import Nav from '../src/components/Nav/Nav';
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
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
      <ScrollToTop className="scrollToTop"/>
      <Footer />
    </div>
  );
}

export default App;
