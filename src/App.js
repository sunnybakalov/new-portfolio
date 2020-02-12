import React from 'react';
import Fade from 'react-reveal/Fade';
import Toggle from 'react-toggle'
import './App.css';
import Nav from '../src/components/Nav/Nav';
import Footer from '../src/components/Footer/Footer';
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop';
import DarkMode from '../src/components/DarkMode';
import Home from '../src/screens/Home/Home';
import About from '../src/screens/About/About';
import Contact from '../src/screens/Contact/Contact';
import Projects from '../src/screens/Projects/Projects';

const body = document.querySelector('body');

body.addEventListener('click', e => toggle(e));

const toggle = event => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
  } else {
  body.classList.add('light-mode');  
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: true
    }
  }

  handleToggleDarkMode = () => {
    this.setState({
      darkMode: !darkMode
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="main">
          <DarkMode 
            handleToggle={this.handleToggleDarkMode}
          />
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
}
