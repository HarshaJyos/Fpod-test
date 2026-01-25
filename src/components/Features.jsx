import React from 'react';
import './Features.css';
import { FaShieldVirus, FaClock, FaSprayCan, FaQrcode, FaCoins, FaHelmetSafety } from 'react-icons/fa6';
import useScrollReveal from '../hooks/useScrollReveal';

// Helper component to handle individual scroll reveals
const FeatureCard = ({ icon, title, desc, delay }) => {
    const cardRef = useScrollReveal(delay);

    return (
        <div className="feature-card reveal-hidden" ref={cardRef}>
            <div className="feature-icon-wrapper">
                {icon}
            </div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-desc">{desc}</p>
        </div>
    );
};

const Features = () => {
    const headerRef = useScrollReveal(100);

    const features = [
        {
            icon: <FaShieldVirus />,
            title: "Advanced Sanitization",
            desc: "Kills 99.9% of bacteria, viruses, and fungi using cutting-edge disinfection technology."
        },
        {
            icon: <FaClock />,
            title: "Fast & Efficient",
            desc: "Complete helmet sanitization and drying in just 300 seconds (5 minutes)."
        },
        {
            icon: <FaSprayCan />,
            title: "Odor-Free Experience",
            desc: "Eliminates sweat and bad odors effectively, leaving your helmet smelling fresh."
        },
        {
            icon: <FaQrcode />,
            title: "Easy to Use",
            desc: "Simple, automated process. Just scan the QR, place helmet, and let Freshpod do the rest."
        },
        {
            icon: <FaCoins />,
            title: "Cost Optimization",
            desc: "Extends the life of helmets, reducing replacement costs for rental fleets and riders."
        },
        {
            icon: <FaHelmetSafety />,
            title: "Enhanced Durability",
            desc: "Gentle yet effective cleaning ensures helmet materials are preserved for longer use."
        }
    ];

    return (
        <section className="features" id="features">
            <div className="container">
                <div className="section-header reveal-hidden" ref={headerRef}>
                    <span className="section-subtitle">Why Choose Freshpod</span>
                    <h2 className="section-title">What Makes Us Different</h2>
                </div>

                <div className="features-grid">
                    {features.map((item, index) => (
                        <FeatureCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            desc={item.desc}
                            delay={index * 150} // Stagger delay
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
