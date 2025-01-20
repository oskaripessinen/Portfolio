import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/hamburgerMenu.css';

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="hamburger-nav">
            <h2>Oskari Pessinen</h2>
            <div className="hamburger-container">
               
                <button 
                    className={`hamburger-button ${open ? 'open' : ''}`}
                    onClick={() => setOpen(!open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`menu-items ${open ? 'open' : ''}`}>
                <Link to="about" offset={600} onClick={() => setOpen(false)}>About</Link>
                <Link to="experience" onClick={() => setOpen(false)}>Experience</Link>
                <Link to="projects" onClick={() => setOpen(false)}>Projects</Link>
                <Link to="contact"  onClick={() => setOpen(false)}>Contact</Link>
            </div>
            </div>
            
        </div>
    );
}

export default HamburgerMenu;