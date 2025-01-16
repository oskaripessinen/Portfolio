import React from "react";
import '../styles/experience.css';
import { ReactComponent as Circlecheck } from '../assets/circle-check-regular.svg';



const Experience = () => {
    return (
        <div className="experience-container">
            <h2 style={{fontFamily: 'Poppins', fontSize: 18, fontWeight: 500, color: '#525150', marginTop: '5rem'}}>My</h2>
            <h1 style={{fontFamily: 'Poppins', fontSize: 42, fontWeight: 600}}>Experience</h1>
            <div className="experience-grid">
                <div className="experience-card">
                    <h3 style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, marginBottom: '2rem'}}>Frontend</h3>
                    <ul className="skills-list">
                        <li><Circlecheck className="skill-icon" />React</li>
                        <li><Circlecheck className="skill-icon" />React Native</li>
                        <li><Circlecheck className="skill-icon" />JavaScript</li>
                        <li><Circlecheck className="skill-icon" />TypeScript</li>
                        <li><Circlecheck className="skill-icon" />HTML5</li>
                        <li><Circlecheck className="skill-icon" />CSS</li>
                    </ul>
                </div>
                <div className="experience-card">
                    <h3 style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, marginBottom: '2rem'}}>Backend</h3>
                    <ul className="skills-list">
                        <li><Circlecheck className="skill-icon" />Python</li>
                        <li><Circlecheck className="skill-icon" />Java</li>
                        <li><Circlecheck className="skill-icon" />Flask</li>
                        <li><Circlecheck className="skill-icon" />Node.js</li>
                        <li><Circlecheck className="skill-icon" />SQL</li>
                        <li><Circlecheck className="skill-icon" />MongoDB</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;