import React from 'react';
import './Hero.css';
import useScrollReveal from '../hooks/useScrollReveal';

const Hero = () => {
    const titleRef = useScrollReveal(200);
    const textRef = useScrollReveal(400);
    const btnRef = useScrollReveal(600);
    const imgRef = useScrollReveal(800);

    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title reveal-hidden" ref={titleRef}>
                        Revolutionize Helmet Hygiene – <span className="highlight-text">Fresh, Safe Rides</span> Every Time!
                    </h1>
                    <p className="hero-subtitle reveal-hidden" ref={textRef}>
                        India's first smart helmet disinfectant machine. Kills 99.9% germs, removes odors in minutes. Proudly Made in India.
                    </p>
                    <div className="hero-buttons reveal-hidden" ref={btnRef}>
                        <a href="#calculator" className="btn btn-primary">Get Fresh Now</a>
                        <a href="#contact" className="btn btn-secondary">For Businesses</a>
                    </div>
                </div>

                <div className="hero-image-wrapper reveal-hidden" ref={imgRef}>
                    {/* Placeholder until we generate/get real image */}
                    <div className="hero-image-placeholder">
                        <span>Freshpod Machine 360°</span>
                        <div className="hero-badge">300 Seconds!</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
