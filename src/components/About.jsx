import React from 'react';
import { Link } from 'react-scroll';
import '../styles/about.css';
import githubIcon from '../assets/github.png';
import myCV from '../assets/cv.pdf';


const About = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = myCV;
        link.download = 'OpessCV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
        
            <div className="about" style={{ marginTop: '2rem' }}>
                <h3 style={{fontWeight: 400,color: "#525150", fontFamily: 'Poppins', fontSize: 24, marginTop: '1rem'}}>Hello, i'm</h3>
                <h1 style={{fontWeight: 600, fontFamily: 'Poppins', fontSize: 38, marginTop: '1rem'}}>Oskari Pessinen</h1>
                <h2 style={{fontWeight: 600, fontFamily: 'Poppins', fontSize: 32, color: "#525150", marginTop: '1rem'}}>Full-stack developer</h2>
                <div className='buttonContainer'>
                    <button className='cvB' onClick={handleDownload}>Download CV</button>
                    <Link to="contact" offset={0} duration={400}>
                        <button className='conB'>Contact </button>
                    </Link>
                    <button className='githubB' onClick={() => window.open('https://github.com/oskaripessinen')}>
                        <img src={githubIcon} alt="GitHub" style={{width: '30px',}}/>
                    </button>
                </div>
                
            </div>
            <div className="about-container" style={{
                textAlign: 'left',
                
            }}>
                <h1 className="about-title" style={{
                    fontWeight: 600,
                    fontFamily: 'Poppins',
                    fontSize: 38,
                    
                }}>About me</h1>
                
                
                <div className="content-wrapper">
                <div className="about-text">
                        <p>
                            I am a passionate full-stack developer with a strong foundation in both front-end and back-end development. 
                            Currently pursuing my Master's degree in Computer Engineering, I combine academic knowledge with practical 
                            experience in building web and mobile applications.
                        </p>

                        <p style={{ marginTop: '1rem' }}>
                            My technical expertise includes React, React-Native, Flask and various modern web technologies. I'm particularly 
                            interested in creating efficient, user-friendly applications that solve real-world problems.
                        </p>
                        
                    </div>
                    <div className="education-box" style={{
                        backgroundColor: '#f5f5f5',
                        maxWidth: '600px'
                    }}>
                        <h3 className="education-heading">
                            Education</h3>
                        
                        <div className="education-content" style={{
                            margin: 0
                        }}>
                            <h4 style={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                color: '#333'
                            }}>University of Turku</h4>
                            <p style={{
                                fontFamily: 'Poppins',
                                fontSize: '14px',
                                color: '#666',
                                marginTop: '0.5rem'
                            }}>MSc Computer Engineering</p>
                            <p style={{
                                fontFamily: 'Poppins',
                                fontSize: '14px',
                                color: '#888',
                                marginTop: '0.25rem'
                            }}>2023 - Present</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default About;