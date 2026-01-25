import React from 'react';
import './MakeInIndia.css';
import { FaIndustry } from 'react-icons/fa';

const MakeInIndia = () => {
    return (
        <section className="make-in-india" id="make-in-india">
            <div className="container mii-content">
                <div className="mii-badge">
                    <FaIndustry size={50} color="#0a1a2f" />
                </div>
                <h2 className="mii-title">Proudly Made in India – <span className="mii-highlight">Atmanirbhar</span> <span className="mii-highlight-2">Bharat</span></h2>
                <p className="mii-text">
                    A symbol of innovation & self-reliance. Freshpod is designed, engineered, and manufactured
                    right here in India, supporting the local ecosystem and setting global standards in hygiene technology.
                </p>
            </div>
        </section>
    );
};

export default MakeInIndia;
