import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import HamburgerMenu from './components/HamburgerMenu';
import FadeInWrapper from './components/FadeInWrapper';
import './App.css';

const FadedNavbar = FadeInWrapper(Navbar);
const FadedHamburgerMenu = FadeInWrapper(HamburgerMenu);
const FadedAbout = FadeInWrapper(About);
const FadedExperience = FadeInWrapper(Experience);
const FadedProjects = FadeInWrapper(Projects);
const FadedContact = FadeInWrapper(Contact);
const FadedFooter = FadeInWrapper(Footer);

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      {isMobile ? <FadedHamburgerMenu /> : <FadedNavbar />}
      <section id="about">
        <FadedAbout />
      </section>
      <section id="experience">
        <FadedExperience />
      </section>
      <section id="projects">
        <FadedProjects isMobile={isMobile}/>
      </section>
      <section id="contact">
        <FadedContact />
      </section>
      <FadedFooter />
    </div>
  );
}

export default App;