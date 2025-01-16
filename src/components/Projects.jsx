import React from 'react';
import '../styles/projects.css';
import projectGif1 from '../assets/project1.gif'; 
import projectGif2 from '../assets/project2.gif';
import projectPng3 from '../assets/project3.png';


const Projects = () => {
    return (
        <div className="projects-container">
            <h2 style={{fontFamily: 'Poppins', fontSize: 18, fontWeight: 500, color: '#525150', marginTop: '2rem'}}>My Recent</h2>
            <h1 style={{fontFamily: 'Poppins', fontSize: 42, fontWeight: 600,}}>Projects</h1>
            <ul className="projects-grid">
                <li className="project-card">
                    <div className="project-gif-container">
                        <img src={projectGif1} alt="Project 1 Demo" className="project-gif"/>
                    </div>
                    
                    <h3 style={{fontFamily: 'Poppins', fontSize: 20, fontWeight: 600, marginTop: '2rem'}}>Stocks App</h3>
                    <button className='githubBtn' onClick={() => window.open('https://github.com/oskaripessinen/stock-app')}>GitHub</button>
                   
                </li>
                <li className="project-card">
                    <div className="project-gif-container" style={{}}>
                        <img src={projectGif2} alt="Project 2 Demo" className="project-gif"/>
                    </div>
                    <h3 style={{fontFamily: 'Poppins', fontSize: 20, fontWeight: 600, marginTop: '2rem'}}>Price Finder</h3>
                    <button className='githubBtn' onClick={() => window.open('https://github.com/oskaripessinen/price-finder')}>GitHub</button>
                </li>
                <li className="project-card">
                    <div className="project-gif-container" style={{}}>
                        <img src={projectPng3} alt="Project 3 Demo" className="project-gif"/>
                        <h3 style={{marginTop: '2rem', fontFamily: 'Poppins', fontWeight: '400', color: "#525150", fontSize: 16, textAlign: 'left'}}>Youtube downloader and music player. Lets you download songs or playlists and play them. </h3>
                    </div>
                    <h3 style={{fontFamily: 'Poppins', fontSize: 20, fontWeight: 600, marginTop: '2rem'}}>Music Dowloader / Player</h3>
                    <button className='githubBtn' onClick={() => window.open('https://github.com/oskaripessinen/price-finder')}>GitHub</button>
                        
                </li>
            </ul>
        </div>
    );
};

export default Projects;