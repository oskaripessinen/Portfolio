import React from "react";
import '../styles/experience.css';
import { ReactComponent as Circlecheck } from '../assets/circle-check-regular.svg';



const Experience = () => {
    return (
        <div className="experience-container">
            <h2 style={{fontFamily: 'Poppins', fontSize: 18, fontWeight: 500, color: '#525150',}}>My</h2>
            <h1 style={{fontFamily: 'Poppins', fontSize: 32, fontWeight: 600}}>Experience</h1>
            <div className="experience-grid">
                <div className="experience-card">
                    <h3>Frontend</h3>
                    <ul className="skills-list">
                        <li><Circlecheck className="skill-icon" />JavaScript</li>
                        <li><Circlecheck className="skill-icon" />TypeScript</li>
                        <li><Circlecheck className="skill-icon" />React</li>
                        <li><Circlecheck className="skill-icon" />React Native</li>
                        <li><Circlecheck className="skill-icon" />HTML5</li>
                        <li><Circlecheck className="skill-icon" />CSS</li>
                    </ul>
                </div>
                <div className="experience-card">
                    <h3>Backend</h3>
                    <ul className="skills-list">
                        <li><Circlecheck className="skill-icon" />Python</li>
                        <li><Circlecheck className="skill-icon" />MongoDB</li>
                        <li><Circlecheck className="skill-icon" />Flask</li>
                        <li><Circlecheck className="skill-icon" />Node.js</li>
                        <li><Circlecheck className="skill-icon" />SQL</li>
                        <li><Circlecheck className="skill-icon" />Java</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;