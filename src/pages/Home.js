import React, { useEffect, useState } from 'react';
import './styles/Home.css';
import ParticlesBackground from '../components/InteractiveBackground/ParticlesBackground';

const Home = ({ homeRef, aboutRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const currentRef = homeRef.current; // Store current ref in a variable
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [homeRef]);

  return (
    <section ref={homeRef} className="home">
      {isVisible && <ParticlesBackground />}
      <div className="welcome-text">
        <h1>
          Hello, I'm <span className="highlight">Shiva Adusumilli</span> <br /> I'm a Software Developer
        </h1>
        <button className="scroll-button" onClick={handleScroll}>
        Step Into My World        </button>
      </div>

      <div className="welcome-tag">
        <h3>Driven by Passion, Powered by Code</h3>
      </div>
    </section>
  );
};

export default Home;
