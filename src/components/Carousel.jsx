import React, { useState, useRef, useEffect } from 'react';
import '../styles/carousel.css';

const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const carouselRef = useRef(null);
    
    // Määritetään minimipyyhkäisyetäisyys
    const minSwipeDistance = 50;
    
    // Laske lasten määrä
    const childrenCount = React.Children.count(children);

    // Nuolipainikkeiden käsittely
    const handlePrevious = () => {
        const newIndex = currentIndex === 0 ? childrenCount - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    
    const handleNext = () => {
        const newIndex = currentIndex === childrenCount - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Pyyhkäisyn käsittely
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
        setIsSwiping(true);
    };
    
    const handleTouchMove = (e) => {
        if (isSwiping) {
            setTouchEnd(e.targetTouches[0].clientX);
        }
    };
    
    const handleTouchEnd = () => {
        setIsSwiping(false);
        
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        
        if (isLeftSwipe) {
            handleNext();
        }
        
        if (isRightSwipe) {
            handlePrevious();
        }
        
        // Nollaa arvot seuraavaa pyyhkäisyä varten
        setTouchStart(0);
        setTouchEnd(0);
    };
    
    // Hiiren drag-käsittely (desktop-käyttäjille)
    const handleMouseDown = (e) => {
        setTouchStart(e.clientX);
        setIsSwiping(true);
    };
    
    const handleMouseMove = (e) => {
        if (isSwiping) {
            setTouchEnd(e.clientX);
        }
    };
    
    const handleMouseUp = () => {
        handleTouchEnd();
    };
    
    const handleMouseLeave = () => {
        if (isSwiping) {
            handleTouchEnd();
        }
    };

    // Pikanäppäinten käsittely
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                handlePrevious();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            }
        };
        
        document.addEventListener('keydown', handleKeyDown);
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex]);

    return (
        <div className="custom-carousel">
            <div className="carousel-container"
                ref={carouselRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                <div 
                    className="carousel-slides"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: isSwiping ? 'none' : 'transform 0.4s ease'
                    }}
                >
                    {React.Children.map(children, (child, index) => (
                        <div className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="carousel-controls">
                <button 
                    className="carousel-button prev-button"
                    onClick={handlePrevious}
                    aria-label="Previous slide"
                >
                    &#10094;
                </button>
                
                <div className="carousel-dots">
                    {Array.from({ length: childrenCount }).map((_, index) => (
                        <button 
                            key={index} 
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
                
                <button 
                    className="carousel-button next-button"
                    onClick={handleNext}
                    aria-label="Next slide"
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Carousel;