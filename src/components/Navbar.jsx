import React from 'react';
import { Link } from 'react-scroll';

import '../styles/navbar.css';

const Navbar = () => {
    
  return (
    <div className="navbar">
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
            <h2 style={{fontWeight: 300,color: "#3b3a39", fontFamily: 'Poppins', fontSize: 28}}>Oskari Pessinen</h2>
            <ul>
                <li>
                    <Link to="about" offset={300} duration={400} className='navbarLink'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="experience" offset={0} duration={400} className='navbarLink'>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link to="projects" offset={0} duration={400} className='navbarLink'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" offset={0} duration={400} className='navbarLink'>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;