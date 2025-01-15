import React from 'react';
import { Link } from 'react-scroll';



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <div className="footer-links" style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
                    <Link to="home" offset={0} duration={400} style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 500, color: "#525150" }}>
                        Home
                    </Link>
                    <Link to="projects" offset={0} duration={400} style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 500, color: "#525150" }}>
                        Projects
                    </Link>
                    <Link to="contact" offset={0} duration={400} style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 500, color: "#525150" }}>
                        Contact
                    </Link>
                </div>
                <p style={{fontFamily: 'Poppins'}}>&copy; 2025 Oskari Pessinen. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;