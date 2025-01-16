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
                    <Link to="about" offset={0} duration={400} style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 500 }}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="experience" offset={0} duration={400} style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 500 }}>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link to="projects" offset={0} duration={400} style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 500 }}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" offset={0} duration={400} style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 500 }}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;