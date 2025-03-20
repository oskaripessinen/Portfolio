import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HamburgerMenu from './components/HamburgerMenu';
import FadeInWrapper from './components/FadeInWrapper';
import './App.css';

const FadedNavbar = FadeInWrapper(Navbar);
const FadedHamburgerMenu = FadeInWrapper(HamburgerMenu);
const FadedAbout = FadeInWrapper(AboutMe);
const FadedFrontPage = FadeInWrapper(FrontPage);
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
      <section id="home" style={{justifyContent: 'flex-start', marginTop: '0', paddingTop: '1rem'}}>
        {isMobile ? <FadedHamburgerMenu /> : <FadedNavbar />}
        <div style={{flex: 1}}>
          <FadedFrontPage />
        </div>
      </section>
      <section id="about-me">
        <FadedAbout />
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