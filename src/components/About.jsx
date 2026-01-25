import React from 'react';
import './About.css';
import { FaMedal } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
    const imgRef = useScrollReveal(200);
    const textRef = useScrollReveal(400);

    return (
        <section className="about" id="about">
            <div className="container about-content">
                <div className="about-image reveal-hidden" ref={imgRef}>
                    <div className="about-img-placeholder">
                        [Team/Rider using Freshpod]
                    </div>
                </div>

                <div className="about-text reveal-hidden" ref={textRef}>
                    <span className="section-subtitle">Who We Are</span>
                    <h2>Welcome to Freshpod!</h2>
                    <p>
                        We are on a mission to redefine hygiene for bikers, delivery fleets, and businesses.
                        Freshpod is India's first revolutionary helmet disinfectant machine, designed to
                        eliminate bacteria, fungi, viruses, and odors in just 300 seconds.
                    </p>
                    <p>
                        Compact, cost-effective, and versatile, our solution is perfect for delivery hubs,
                        bike rentals, and petrol pumps. Join us in making every ride a fresh ride.
                    </p>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <span className="stat-number">1 Lakh+</span>
                            <span className="stat-label">Helmets Sanitized</span>
                        </div>
                        <div className="stat-card">
                            <FaMedal size={30} color="var(--accent-main)" style={{ marginBottom: '10px' }} />
                            <span className="stat-label" style={{ display: 'block' }}>BRICS Silver Medal</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <a href="#features" className="btn btn-secondary">Discover Features</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
