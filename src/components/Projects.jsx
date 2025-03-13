import React, {useRef, useState, useEffect} from 'react';
import '../styles/projects.css';
import projectVideo1 from '../assets/project1.mp4'; 
import projectVideo2 from '../assets/project2.mp4';

import { ReactComponent as PlayIcon } from '../assets/play-solid.svg';

const Projects = () => {
    const video1Ref = useRef(null);
    const video2Ref = useRef(null);
    const [isIOS, setIsIOS] = useState(false);
    
    useEffect(() => {
        
        const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                          (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        setIsIOS(isIOSDevice);
    }, []);

    const handleMouseEnter = (videoRef) => {
        if (!isIOS && videoRef.current) {
            videoRef.current.play().catch(err => console.log("Autoplay prevented:", err));
        }
    };

    const handleMouseLeave = (videoRef) => {
        if (!isIOS && videoRef.current) {
            videoRef.current.pause();
        }
    };
    
    const handleVideoClick = (videoRef) => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(err => console.log("Play failed:", err));
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <div className="projects-container">
            <h2 style={{fontFamily: 'Poppins', fontSize: 18, fontWeight: 500, color: '#525150'}}>My Recent</h2>
            <h1 style={{fontFamily: 'Poppins', fontSize: 42, fontWeight: 600,}}>Projects</h1>
            <ul className="projects-grid">
                <li className="project-card">
                    <div className="project-video-container"
                        onMouseEnter={() => handleMouseEnter(video1Ref)}
                        onMouseLeave={() => handleMouseLeave(video1Ref)}
                        onClick={() => handleVideoClick(video1Ref)}>
                        <PlayIcon className={`play-icon ${isIOS ? 'visible' : ''}`}/>
                        <video 
                            ref={video1Ref}
                            src={projectVideo1}
                            className="project-video"
                            muted
                            loop
                            playsInline={true}
                            poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
                        />
                    </div>
                    <div className="project-content">
                        <div style={{margin: 0, padding: 0, width: "200px"}}>
                            <h3 style={{fontFamily: 'Poppins', fontSize: 18, fontWeight: 600}}>Stocks App</h3>
                            <p>
                                A Mobile application for tracking stock prices and managing a stock portfolio.
                                Built with React native and Yahoo finance Api for real time stock data.
                            </p>
                        </div>
                        <button className='githubBtn' onClick={() => window.open('https://github.com/oskaripessinen/stock-app')}>GitHub</button>
                    </div>
                </li>
                <li className="project-card">
                    <div className="project-video-container"
                        onMouseEnter={() => handleMouseEnter(video2Ref)}
                        onMouseLeave={() => handleMouseLeave(video2Ref)}
                        onClick={() => handleVideoClick(video2Ref)}>
                        <PlayIcon className={`play-icon ${isIOS ? 'visible' : ''}`}/>
                        <video 
                            ref={video2Ref}
                            src={projectVideo2}
                            className="project-video"
                            muted
                            loop
                            playsInline={true}
                            poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
                        />
                    </div>
                    <div className="project-content">
                        <div style={{margin: 0, padding: 0, width: "200px"}}>
                            <h3 style={{fontFamily: 'Poppins', fontSize: 18, fontWeight: 600, width: "200px"}}>Price Finder</h3>
                            <p>
                                A Mobile application for finding prices of products from different online stores. 
                                Built with React native, Flask and Ebay Api.
                            </p>
                        </div>
                        <button className='githubBtn' onClick={() => window.open('https://github.com/oskaripessinen/price-finder')}>GitHub</button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Projects;