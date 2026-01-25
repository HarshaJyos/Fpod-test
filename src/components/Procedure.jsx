import React from 'react';
import './Procedure.css';
import useScrollReveal from '../hooks/useScrollReveal';
import { FaQrcode, FaUnlock, FaHelmetSafety, FaLock, FaMagic, FaMotorcycle } from 'react-icons/fa6';

const Procedure = () => {
    const headerRef = useScrollReveal(100);

    const steps = [
        { num: 1, text: "Scan QR", icon: <FaQrcode /> },
        { num: 2, text: "Unlock Door", icon: <FaUnlock /> },
        { num: 3, text: "Place Helmet", icon: <FaHelmetSafety /> },
        { num: 4, text: "Lock Door", icon: <FaLock /> },
        { num: 5, text: "Start Clean", icon: <FaMagic /> },
        { num: 6, text: "Ride Fresh", icon: <FaMotorcycle /> },
    ];

    return (
        <section className="procedure" id="procedure">
            <div className="container">
                <div className="section-header reveal-hidden" ref={headerRef}>
                    <span className="section-subtitle">How It Works</span>
                    <h2 className="section-title">Hygiene in 6 Simple Steps</h2>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <StepCard key={index} step={step} delay={index * 150} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StepCard = ({ step, delay }) => {
    const stepRef = useScrollReveal(delay);

    return (
        <div className="step-item reveal-hidden" ref={stepRef}>
            <div className="step-number">{step.num}</div>
            <div className="step-text">
                {step.text} <br />
                <span className="step-icon">{step.icon}</span>
            </div>
        </div>
    );
}

export default Procedure;
