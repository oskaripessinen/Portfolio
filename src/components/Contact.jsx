import React from 'react';
import '../styles/contact.css';
import ln from '../assets/ln.png';
import email from '../assets/mail.png';

const Contact = () => {
    return (
        <div className='contact-wrapper'>
            <h2 style={{fontFamily: 'Poppins', fontSize: 42}}>Contact Me</h2>
            <div className="contact-container">
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0, gap: '0.75rem'}}>
                    <button className='emailBtn' onClick={() => window.open('mailto:oskari.pessinen@gmail.com')}>
                        <img src={email} alt="email" style={{width: '35px', height: '35px'}}/>
                    </button>
                    <h3 style={{fontFamily: 'Poppins', fontSize: 20, fontWeight: '500'}}>oskari.pessinen@gmail.com</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0, gap: '0.75rem'}}>
                    <button className='emailBtn' onClick={() => window.open('https://www.linkedin.com/in/oskari-pessinen-6114582a6/')}>
                        <img src={ln} alt="email" style={{width: '35px', height: '35px'}}/>
                    </button>
                    <h3 style={{fontFamily: 'Poppins', fontSize: 20, fontWeight: '500'}}>LinkedIn</h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;