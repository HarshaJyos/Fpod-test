import React from 'react';
import './MakeInIndia.css';
import { FaIndustry } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const MakeInIndia = () => {
    const badgeRef = useScrollReveal(200);
    const textRef = useScrollReveal(400);

    return (
        <section className="make-in-india" id="make-in-india">
            <div className="container mii-content">
                <div className="mii-badge reveal-hidden" ref={badgeRef}>
                    <FaIndustry size={60} color="#ffffff" />
                </div>

                <div className="reveal-hidden" ref={textRef}>
                    <h2 className="mii-title">
                        Proudly Made in India –{' '}
                        <span className="mii-highlight">Atmanirbhar</span>{' '}
                        <span className="mii-highlight-2">Bharat</span>
                    </h2>

                    <p className="mii-text">
                        A symbol of innovation & self-reliance. Freshpod is designed,
                        engineered, and manufactured right here in India, supporting the
                        local ecosystem and setting global standards in hygiene technology.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MakeInIndia;
