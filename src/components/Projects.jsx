import React, { useRef, useState, useEffect } from 'react';
import '../styles/projects.css';
import projectVideo1 from '../assets/project1.mp4'; 
import projectVideo2 from '../assets/project2.mp4';
import { ReactComponent as Globe } from '../assets/globe-solid.svg';
import { ReactComponent as PlayIcon } from '../assets/play-solid.svg';

const Projects = ({ isMobile }) => {
    const video1Ref = useRef(null);
    const video2Ref = useRef(null);
    const carouselRef = useRef(null);
    const [isIOS, setIsIOS] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    
    // Tunnista iOS-laitteet
    useEffect(() => {
        const isIOSDevice = /iPad|iPhone/.test(navigator.userAgent) || 
                          (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        setIsIOS(isIOSDevice);
    }, []);

    
    useEffect(() => {
        // Suorita vain jos ei ole mobiililaite
        console.log(isMobile);
        if (!isMobile) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.7
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const slideIndex = parseInt(entry.target.dataset.slideIndex, 10);
                        setActiveSlide(slideIndex);
                    }
                });
            }, options);
            
            const slides = document.querySelectorAll('.carousel-slide');
            slides.forEach(slide => observer.observe(slide));
            
            return () => {
                slides.forEach(slide => observer.unobserve(slide));
            };
        }
        return () => {};
    }, [isMobile]);

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
    
    const handleVideoClick = (e, videoRef) => {
        e.stopPropagation();
        
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(err => console.log("Play failed:", err));
            } else {
                videoRef.current.pause();
            }
        }
    };
    
    const scrollToSlide = (index) => {
        if(!isMobile){
            const slideElement = document.querySelector(`[data-slide-index="${index}"]`);
            if (slideElement && carouselRef.current) {
                carouselRef.current.scrollTo({
                    left: slideElement.offsetLeft,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div className="projects-container">
            <h2 style={{fontFamily: 'Poppins', fontSize: 18, fontWeight: 500, color: '#525150'}}>My Recent</h2>
            <h1 style={{fontFamily: 'Poppins', fontSize: 32, fontWeight: 600,}}>Projects</h1>
            
            <div className="scroll-carousel-container">
                <div ref={carouselRef} className="scroll-carousel">
                    <div className="carousel-slide" data-slide-index="0">
                        <div className="project-card image-card">
                            <div className="project-content">
                                <div style={{margin: 0, padding: 0}}>
                                    <h3>Notia</h3>
                                    <p>
                                        A web application for creating and sharing notes. 
                                        Built with React, Node.js, Express and MongoDB.
                                        Real time collaboration with Socket.io.
                                        CI/CD pipelines implemented with GitHub Actions.
                                        The backend is hosted on Render, and the frontend on Vercel.
                                    </p>

                                    <p style={{color: '#525150', fontSize: 12, marginTop: 10}}>
                                        Server may take some time to start up due to free tier hosting.
                                    </p>
                                    
                                   
                                    <div className="tech-stack">
                                        <span className="tech-bubble">React</span>
                                        <span className="tech-bubble">Node.js</span>
                                        <span className="tech-bubble">MongoDB</span>
                                        <span className="tech-bubble">Socket.io</span>
                                        <span className="tech-bubble">GitHub Actions</span>
                                    </div>
                                </div>
                                <div className="button-container">
                                    <button 
                                        className='githubBtn' 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open('https://github.com/oskaripessinen/notia-client');
                                        }}
                                    >
                                        GitHub
                                    </button>

                                    <button 
                                        className='site-button' 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open('https://notia-client.vercel.app/login');
                                        }}
                                    >
                                        <Globe/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-slide" data-slide-index="1">
                        <div className="project-card">
                            <div className="project-video-container"
                                style={{maxWidth: '196px'}}
                                onMouseEnter={() => handleMouseEnter(video1Ref)}
                                onMouseLeave={() => handleMouseLeave(video1Ref)}
                                onClick={(e) => handleVideoClick(e, video1Ref)}>
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
                                <div style={{margin: 0, padding: 0, width: '225px'}}>
                                    <h3>Stocks App</h3>
                                    <p>
                                        A Mobile application for tracking stock prices and managing a stock portfolio.
                                        Built with React native and Yahoo finance Api for real time stock data.
                                    </p>
                                    
        
                                    <div className="tech-stack">
                                        <span className="tech-bubble">React Native</span>
                                        <span className="tech-bubble">Expo</span>
                                        <span className="tech-bubble">Yahoo API</span>
                                        
                                    </div>
                                </div>
                                <button 
                                    className='githubBtn' 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open('https://github.com/oskaripessinen/stock-app');
                                    }}
                                >
                                    GitHub
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-slide" data-slide-index="2">
                        <div className="project-card">
                            <div className="project-video-container"
                                onMouseEnter={() => handleMouseEnter(video2Ref)}
                                onMouseLeave={() => handleMouseLeave(video2Ref)}
                                onClick={(e) => handleVideoClick(e, video2Ref)}>
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
                                <div style={{margin: 0, padding: 0, width: '225px'}}>
                                    <h3>Price Finder</h3>
                                    <p>
                                        A Mobile app for finding prices of products from different online stores. 
                                        Built with React native, Flask and Ebay Api.
                                    </p>
                                    
                                    <div className="tech-stack">
                                        <span className="tech-bubble">React Native</span>
                                        <span className="tech-bubble">Flask</span>
                                        <span className="tech-bubble">eBay API</span>
                                        <span className="tech-bubble">Python</span>
                                    </div>
                                </div>
                                <button 
                                    className='githubBtn' 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open('https://github.com/oskaripessinen/price-finder');
                                    }}
                                >
                                    GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
              {isMobile === false &&
                <div className="carousel-dots">
                    {[0, 1, 2].map((index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${activeSlide === index ? "active" : ""}`}
                            onClick={() => scrollToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>}
                
               {isMobile === false &&
                <button 
                    className="carousel-nav prev"
                    onClick={() => scrollToSlide(activeSlide > 0 ? activeSlide - 1 : activeSlide)}
                    aria-label="Previous slide"
                >
                    &#10094;
                </button>}

                {isMobile === false &&
                <button 
                    className="carousel-nav next"
                    onClick={() => scrollToSlide(activeSlide < 2 ? activeSlide + 1 : activeSlide)}
                    aria-label="Next slide"
                >
                    &#10095;
                </button>}
            </div>
        </div>
    );
};

export default Projects;