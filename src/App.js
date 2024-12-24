import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Experience from './pages/Experience';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

import './App.css';

const App = () => {
  const [showHeader, setShowHeader] = useState(false);

  // References for navigation and scroll functionality
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > window.innerHeight - 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {showHeader &&       <Header
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />}
      <main>
        <Home 
          homeRef={homeRef}
          aboutRef={aboutRef}
        />
        <About aboutRef={aboutRef} />
        <Skills skillsRef={skillsRef} />
        <Experience experienceRef={experienceRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
      </main>
    </div>
  );
};

export default App;
