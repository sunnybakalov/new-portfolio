import React from 'react';
import './App.css';
import Home from '../src/screens/Home/Home';
import Nav from '../src/components/Nav/Nav';
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
    </div>
  );
}

export default App;
