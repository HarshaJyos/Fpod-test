import React from 'react';
import './Procedure.css';
import useScrollReveal from '../hooks/useScrollReveal';

const Procedure = () => {
    const headerRef = useScrollReveal(100);

    const steps = [
        { num: 1, text: "Scan QR", icon: "📱" },
        { num: 2, text: "Unlock Door", icon: "🔓" },
        { num: 3, text: "Place Helmet", icon: "⛑️" },
        { num: 4, text: "Lock Door", icon: "🔒" },
        { num: 5, text: "Start Clean", icon: "✨" },
        { num: 6, text: "Ride Fresh", icon: "🏍️" },
    ];

    return (
        <section className="procedure" id="procedure">
            <div className="container">
                <div className="section-header reveal-hidden" ref={headerRef}>
                    <span className="section-subtitle">How It Works</span>
                    <h2 className="section-title">Hygiene in 6 Simple Steps</h2>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => {
                        // Create individual hook call for each item (must be done in a separate component ideally)
                        // or just animate the whole container.
                        // For "Billion Dollar" feel, let's use a wrapper component similar to Features.
                        return <StepCard key={index} step={step} delay={index * 150} />
                    })}
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
                <span className="step-icon">{step.step}</span> {/* Removed span icon usage from text prop which was dual purpose */}
                <span className="step-icon">{step.icon}</span>
            </div>
        </div>
    );
}

export default Procedure;
