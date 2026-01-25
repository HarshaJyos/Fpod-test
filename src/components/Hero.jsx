import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Revolutionize Helmet Hygiene – Fresh, Safe Rides Every Time!
                    </h1>
                    <p className="hero-subtitle">
                        India's first smart helmet disinfectant machine. Kills 99.9% germs, removes odors in minutes. Proudly Made in India.
                    </p>
                    <div className="hero-buttons">
                        <a href="#calculator" className="btn btn-primary">Get Fresh Now</a>
                        <a href="#contact" className="btn btn-secondary">For Businesses</a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    {/* Placeholder until we generate/get real image */}
                    <div className="hero-image-placeholder">
                        <span>[Freshpod Machine Image]</span>
                        <div className="hero-badge">300 Seconds!</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
