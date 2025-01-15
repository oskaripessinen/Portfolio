import React from 'react';
import '../styles/contact.css';
import ln from '../assets/ln.png';
import email from '../assets/mail.png';

const Contact = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '13rem'
        }}>
            <h2 style={{fontFamily: 'Poppins', fontSize: 42}}>Contact Me</h2>
            <div className="contact-container">
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0, gap: '0.5rem'}}>
                    <button className='emailBtn' onClick={() => window.open('mailto:oskari.pessinen@gmail.com')}>
                        <img src={email} alt="email" style={{width: '30px', height: '30px'}}/>
                    </button>
                    <h3 style={{fontFamily: 'Poppins', fontSize: 16}}>oskari.pessinen@gmail.com</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0, gap: '0.5rem'}}>
                    <button className='emailBtn' onClick={() => window.open('https://www.linkedin.com/in/oskari-pessinen-6114582a6/')}>
                        <img src={ln} alt="email" style={{width: '33px', height: '33px'}}/>
                    </button>
                    <h3 style={{fontFamily: 'Poppins', fontSize: 16}}>LinkedIn</h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;