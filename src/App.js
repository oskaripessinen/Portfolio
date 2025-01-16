import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact" style={{alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
