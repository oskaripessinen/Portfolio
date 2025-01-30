import React, { useEffect, useState, useRef } from 'react';
import '../styles/fadeInWrapper.css';

const useFadeInOnScroll = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        };
    }, []);

    return [isVisible, ref];
};

const FadeInWrapper = (WrappedComponent) => {
    const FadeInComponent = (props) => {
        const [isVisible, ref] = useFadeInOnScroll();

        return (
            <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
                <WrappedComponent {...props} />
            </div>
        );
    };

    return FadeInComponent;
};

export default FadeInWrapper;