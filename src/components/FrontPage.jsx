import React from 'react';
import { Link } from 'react-scroll';
import '../styles/frontPage.css';
import githubIcon from '../assets/github.png';
import myCV from '../assets/cv.pdf';
import me  from '../assets/me.jpg';
import ln from '../assets/ln.png';


const FrontPage = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = myCV;
        link.download = 'OpessCV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div style={{margin: 0, padding: 0}}>
            <div className="about" style={{ marginTop: '0rem' }}>
                <div className='aboutMe'>
                    <img 
                        src={me} 
                        style={{
                            width: '230px',
                            height: '230px',  
                            objectFit: 'cover',     
                            borderRadius: '50%',   
                                 
                        }}
                        alt="Oskari Pessinen"       
                    />
                    <div style={{margin: "2rem"}}>
                        <h3 style={{fontWeight: 400,color: "#525150", fontFamily: 'Poppins', fontSize: 24, marginTop: '1rem'}}>Hello, i'm</h3>
                        <h1 style={{fontWeight: 600, fontFamily: 'Poppins', fontSize: 42, marginTop: '1rem'}}>Oskari Pessinen</h1>
                        <h2 style={{fontWeight: 600, fontFamily: 'Poppins', fontSize: 32, color: "#525150", marginTop: '1rem'}}>Full-stack developer</h2>
                    </div>
                </div>
                <div className='buttonContainer'>
                    <div style={{margin: 0, padding: 0}}>
                        <button className='cvB' onClick={handleDownload}>Download CV</button>
                        <Link to="contact" offset={0} duration={400}>
                            <button className='conB'>Contact </button>
                        </Link>
                    </div>
                    <div className='socialButtons'>
                        <button className='githubB' onClick={() => window.open('https://github.com/oskaripessinen')}>
                            <img src={githubIcon} alt="GitHub" style={{width: '31px',}}/>
                        </button>
                        <button className='githubB' onClick={() => window.open('https://www.linkedin.com/in/oskari-pessinen-6114582a6/')}>
                            <img src={ln} alt="LinkedIn" style={{width: '35px', height: '35px'}}/>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default FrontPage;