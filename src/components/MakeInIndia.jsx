import React, { useState, useEffect, useRef } from 'react';
import './MakeInIndia.css';
import { FaIndustry } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const MakeInIndia = () => {
    const badgeRef = useScrollReveal(200);
    const textRef = useScrollReveal(400); // This hook manages the entry animation class
    const sectionRef = useRef(null);

    // Dynamic text color state
    const [textColor, setTextColor] = useState('#ffffff');
    const [badgeBorder, setBadgeBorder] = useState('rgba(255, 255, 255, 0.2)');

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate where the center of the section is relative to the viewport (0 to 1)
            // 0 = Top of viewport, 1 = Bottom of viewport
            const sectionCenter = rect.top + (rect.height / 2);
            const relativePos = sectionCenter / viewportHeight;

            // Flag bands assumption (Fixed background):
            // Top (Saffron): < 33% of screen height
            // Middle (White): 33% - 66% 
            // Bottom (Green): > 66%
            // Since background is fixed, the "colored bands" stay at fixed screen % positions.
            // We check where the *text* is sitting.

            if (relativePos > 0.35 && relativePos < 0.65) {
                // We are in the WHITE band
                setTextColor('#0a1a2f'); // Dark Ocean Blue for contrast
                setBadgeBorder('rgba(10, 26, 47, 0.5)');
            } else {
                // We are in Saffron (Top) or Green (Bottom) bands
                setTextColor('#ffffff'); // White text
                setBadgeBorder('rgba(255, 255, 255, 0.2)');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="make-in-india" id="make-in-india" ref={sectionRef}>
            <div className="container mii-content">
                <div className="mii-badge reveal-hidden" ref={badgeRef} style={{ borderColor: badgeBorder }}>
                    <FaIndustry size={60} color={textColor} style={{ transition: 'color 0.3s ease' }} />
                </div>
                <div className="reveal-hidden" ref={textRef}>
                    <h2 className="mii-title" style={{ color: textColor }}>
                        Proudly Made in India – <span className="mii-highlight" style={{ textShadow: textColor === '#ffffff' ? '0 0 20px rgba(0,0,0,0.5)' : 'none' }}>Atmanirbhar</span> <span className="mii-highlight-2" style={{ textShadow: textColor === '#ffffff' ? '0 0 20px rgba(0,0,0,0.5)' : 'none' }}>Bharat</span>
                    </h2>
                    <p className="mii-text" style={{ color: textColor }}>
                        A symbol of innovation & self-reliance. Freshpod is designed, engineered, and manufactured
                        right here in India, supporting the local ecosystem and setting global standards in hygiene technology.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MakeInIndia;
